"use client";
import "./About.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <motion.div
            className="about__text-blocked"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="about__texted" >
              <h1 className="about-title">Покупайте у нас кроссовки.</h1>
              <p className="about-description">Компания Кроссы — и точка.</p>
            </div>
            <div className="about__image-block">
              <img
                src="https://images.footlocker.com/is/image/FLEU/315346316102?wid=250&hei=250"
                alt="Sneakers"
                className="sneaker-image"
              />
            </div>
          </motion.div>

          <motion.div
            className="about__text-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="about__text">
              <h1 className="about-title">МЫ КРУТЫЕ.</h1>
              <p className="about-description">И все это знают.</p>
            </div>
            <div className="about__image-block">
              <img
                src="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/efa829d3-a3f0-43f9-8657-abddf4fccf43/nike-air.png"
                alt="Sneakers"
                className="sneaker-image"
              />
            </div>
          </motion.div>

          <motion.div
            className="about__text-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="about__text">
              <h1 className="about-title">ПРОВЕРЕННОЕ КАЧЕСТВО</h1>
              <p className="about-description">Зеленый рынок кормит.</p>
            </div>
            <div className="about__image-block">
              <img
                src="https://i5.walmartimages.com/asr/42ea5c8d-aec1-42fe-9da5-f910b13d5288.49eb8a372b27208d2282882bb053b6e6.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
                alt="Sneakers"
                className="sneaker-image"
              />
            </div>
          </motion.div>

          <motion.div
            className="about__text-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="about__text">
              <h1 className="about-title">Низкие цены.</h1>
              <p className="about-description">Зеленый рынок кормит.</p>
            </div>
            <div className="about__image-block">
              <img
                src="https://www.golfposer.com/media/catalog/product/n/i/nike-golf-shoes-air-jordan-1-high-g-university-blue-2024-dq0660-400.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
                alt="Sneakers"
                className="sneaker-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
