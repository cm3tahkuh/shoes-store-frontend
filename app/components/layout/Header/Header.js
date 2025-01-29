"use client";
import Link from "next/link";
import LoginModal from "../../modals/LoginModal/LoginModal";
import RegisterModal from "../../modals/RegisterModal/RegisterModal";
import "./Header.scss";
import { useAuth } from "@/app/contexts/AuthContext";
import { useState } from "react";
import { useCart } from "@/app/contexts/CartContext";
import { motion } from "framer-motion";

//Хэдер

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <header className="header">
      <div className="container">
        <motion.div
          whileHover={{ x: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          className="header__row"
        >
          <Link href="/" className="header__title">
            КРОССЫ— И ТОЧКА.
          </Link>
          <nav>
            <div className="header__auth-nav">
              {user ? (
                <>
                  <h2 className="header__username">Привет, {user.username}</h2>
                  <div className="header__auth-block">
                    <button className="header__auth" onClick={logout}>
                      Выйти
                    </button>
                    <Link className="header__username" href="/cartpage">
                      🧺 ({cart.length})
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <button
                    className="header__auth"
                    onClick={() => setShowLogin(true)}
                  >
                    Вход
                  </button>
                  <button
                    className="header__auth"
                    onClick={() => setShowRegister(true)}
                  >
                    Регистрация
                  </button>
                </>
              )}
            </div>
            {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
            {showRegister && (
              <RegisterModal onClose={() => setShowRegister(false)} />
            )}
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
