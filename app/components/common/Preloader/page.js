import { motion } from "framer-motion";
import preload from "./1474.svg"
import Image from "next/image";

//Анимация загрузки

const Preloader = () => {
  return (
    <motion.div 
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Image className="preloader" alt="PRELOADER" src={preload}></Image>
    </motion.div>
  );
};

export default Preloader;
