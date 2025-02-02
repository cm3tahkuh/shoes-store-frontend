"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import "./Products.scss";
import Preloader from "../../common/Preloader/page";
import { motion } from "framer-motion";


// Главная страница с товарами

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await fetch("/api/Products/getAllProducts");
        const data = await response.json();
        console.log(data)
        setData(data);
      } catch (error) {
        console.error("Ошибка при запросе:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, []);

  if (loading) return <Preloader />;

  return (
    <motion.main
    initial={{ scale: 0.5, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}  
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="main"
    >
      <section className="popular">
        <div className="container">
          <h1 className="popular__title __title">Коллекция. Февраль:2025</h1>
          <div className="popular__row __row">
            {data.map((card) => (
              <ProductCard
                key={card.documentId}
                identificator={card.documentId}
                image={card.imagePath}
                name={card.title}
                subname={card.subtitle}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Products;
