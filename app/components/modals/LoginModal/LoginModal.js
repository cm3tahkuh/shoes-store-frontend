"use client";

import { useForm } from "react-hook-form";
import { useAuth } from "@/app/contexts/AuthContext";
import { useState } from "react";
import "../forms.scss";

// Попап окно входа

const LoginModal = ({ onClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const { login } = useAuth();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      const res = await fetch(
        `https://willing-beauty-4aeb52d244.strapiapp.com/api/auth/local`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            identifier: data.email,
            password: data.password,
          }),
        }
      );
      const result = await res.json();

      if (result.jwt) {
        login(result.user, result.jwt);
        reset();
        onClose();
      } else {
        setError("Ошибка входа. Проверьте данные.");
      }
    } catch (error) {
      setError("Ошибка сети.");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>Вход</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", { required: true })}
            placeholder="Email"
          />
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Пароль"
          />
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
