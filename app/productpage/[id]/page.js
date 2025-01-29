"use client";

import axios from "axios";
import { endpoints } from "@/app/api/config";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useAuth } from "@/app/contexts/AuthContext";
import { useCart } from "@/app/contexts/CartContext";
import "./productPage.scss";
import Preloader from "@/app/components/common/Preloader/page";
import { motion } from "framer-motion";

//Страница продукта

const productPage = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { addToCart } = useCart();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_TOKEN = process.env.NEXT_PUBLIC_TOKEN_API;

        const response = await axios.get(`${endpoints.products}/${id}`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });

        setProduct(response.data.data);
      } catch (error) {
        console.error("Ошибка загрузки:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <Preloader />;
  if (!product) return <h1>Товар не найден</h1>;

  const handleAddToCart = () => {
    if (!user) {
      alert(
        "Авторизуйтесь или зарегистрируйтесь, чтобы добавить товар в корзину."
      );
      return;
    }
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      imagePath: product.imagePath,
    });
    alert("Товар добавлен в корзину!");
  };

  return (
    <motion.section
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sneaker"
    >
      <div className="container">
        <div className="sneaker__row">
          <div className="sneaker__column">
            <img
              className="sneaker__photo"
              alt="The New Balance C-ms574"
              src={product.imagePath}
            />
            <h1 className="sneaker__title">{product.title}</h1>
            <h2 className="sneaker__subtitle">{product.subtitle}</h2>
            <div className="sneaker__info">
              <p className="sneaker__description">{product.description}</p>
              <div className="sneaker__feature">
                <h3 className="sneaker__feature-title">О кроссах</h3>
                <hr className="sneaker__feature-line"></hr>
                <div className="sneaker__feature-info">
                  <h3 className="sneaker__feature-info-title">Дата выхода</h3>
                  <h4 className="sneaker__feature-info-subtitle">
                    {product.outtime}
                  </h4>
                </div>
                <hr className="sneaker__feature-line"></hr>
                <div className="sneaker__feature-info">
                  <h3 className="sneaker__feature-info-title">
                    Розничная цена
                  </h3>
                  <h4 className="sneaker__feature-info-subtitle">
                    {product.price} ₽
                  </h4>
                </div>
                <hr className="sneaker__feature-line"></hr>
                <div className="sneaker__feature-info">
                  <h3 className="sneaker__feature-info-title">Материалы</h3>
                  <h4 className="sneaker__feature-info-subtitle">
                    {product.material}
                  </h4>
                </div>
                <hr className="sneaker__feature-line"></hr>
              </div>
            </div>
            <button className="sneaker__add-to-cart" onClick={handleAddToCart}>
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default productPage;
