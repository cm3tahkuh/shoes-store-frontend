"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

// Провайдер для создания корзины 

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const sendOrderToTelegram = async (user) => {
    if (!user) {
      alert("Авторизуйтесь, чтобы оформить заказ!");
      return;
    }

    if (cart.length === 0) {
      alert("Ваша корзина пуста!");
      return;
    }

    try {
      const response = await axios.post("/api/Orders/sendOrderTelegram", {
        email: user.email,
        name: user.username,
        cart: cart.map((item) => ({
          title: item.title,
          quantity: item.quantity,
          price: item.price,
        })),
      });

      if (response.status === 200) {
        alert("Заказ успешно отправлен!");
        clearCart();
      } else {
        alert("Ошибка при отправке заказа.");
      }
    } catch (error) {
      console.error("Ошибка при отправке заказа:", error);
      alert("Ошибка сети. Попробуйте снова.");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        sendOrderToTelegram,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
