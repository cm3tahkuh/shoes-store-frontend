"use client";

import { motion } from "framer-motion";


//Анимация загрузки

const Preloader = () => {
  return (
    <motion.div 
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
  <div className="preloader">
      <div className="spinner"></div>
    </div>
    </motion.div>
  );
};

export default Preloader;
