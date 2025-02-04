"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import "./Products.scss";
import Preloader from "../../common/Preloader/page";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Главная страница с товарами

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await fetch("/api/Products/getAllCollections");
        const data = await response.json();
        console.log(data);
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
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            loop
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
          >
            {data.map((collection) => (
              <SwiperSlide key={collection.documentId}>
                <div className="collection">
                  <h1 className="popular__title __title">{collection.name}</h1>
                  <div className="popular__row __row">
                    {collection.products.map((product) => (
                      <ProductCard
                        key={product.documentId}
                        identificator={product.documentId}
                        image={product.imagePath}
                        name={product.title}
                        subname={product.subtitle}
                      />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </motion.main>
  );
};

export default Products;
