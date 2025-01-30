"use client";
import './About.scss';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <motion.div
            className="about__text-block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}  
            transition={{ duration: 0.5 }}
          >
            <h1 className="about-title">Покупайте у нас кроссовки.</h1>
            <p className="about-description">Компания Кроссы — и точка.</p>
          </motion.div>
          <motion.div
            className="about__text-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="about-title">МЫ КРУТЫЕ.</h1>
            <p className="about-description">И все это знают.</p>
          </motion.div>
          <motion.div
            className="about__text-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="about-title">ПРОВЕРЕННОЕ КАЧЕСТВО</h1>
            <p className="about-description">Зеленый рынок кормит.</p>
          </motion.div>
          <motion.div
            className="about__text-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="about-title">Низкие цены.</h1>
            <p className="about-description">Зеленый рынок кормит.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About;
