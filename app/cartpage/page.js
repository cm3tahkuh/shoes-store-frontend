"use client";

import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import "./cartpage.scss";


//Раздел "Корзина"

const TOKEN_API = process.env.NEXT_PUBLIC_TOKEN_API;



const CartPage = () => {
  
  const { cart, removeFromCart, sendOrderToTelegram } = useCart();
  const { user } = useAuth();

  return (
    <section className="cart">
      <div className="container">
        <h1 className="__title">Корзина</h1>

        {cart.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <>
            <ul className="cart__list __row">
              {cart.map((item) => (
                <li key={item.id} className="__sneaker">
                  <img
                    src={item.imagePath}
                    alt={item.title}
                    className="__image"
                  />
                  <div className="cart__info">
                    <h3 className="__name">{item.title}</h3>
                    <p className="__subname">{item.price} ₽</p>
                    <p className="__subname">Количество: {item.quantity}</p>
                    <button
                      className="__delete"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Удалить
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <h3 className="__prices">
              💰 Итог:{" "}
              {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}{" "}
              ₽
            </h3>
            <button
              className="__button"
              onClick={() => sendOrderToTelegram(user)}
            >
              📤 Оформить заказ
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default CartPage;
