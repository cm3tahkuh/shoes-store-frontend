"use client";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";


import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const Carousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await fetch("/api/Products/getAllProducts");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Ошибка при запросе:", error);
      }
    };

    fetchCard();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 50 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Swiper
        loop={true}
        speed={7000}
        autoplay={{
          delay: 0,
        }}
        freeMode={true}
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 10, speed: 5000 },
          480: { slidesPerView: 2, spaceBetween: 15, speed: 6000 },
          768: { slidesPerView: 3, spaceBetween: 20, speed: 7000 },
          1024: { slidesPerView: 4, spaceBetween: 20, speed: 7000 },
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
        style={{ marginTop: "48px", marginBottom: "48px" }}
      >
        {data.map((card) => (
          <SwiperSlide key={card.documentId} style={{ width: "250px" }}>
            <Link
              href={`/productpage/${card.documentId}`}
              className="popular__column __sneaker"
            >
              <img
                className="popular__image __image"
                src={card.imagePath}
                alt={card.title}
              />
              <div className="popular__text-block __text-block">
                <h1 className="popular__name __name">{card.title}</h1>
                <h2 className="popular__subname __subname">{card.subtitle}</h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Carousel;
