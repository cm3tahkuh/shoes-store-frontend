"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import "../forms.scss";
import { BASE_URL } from "@/app/api/config";

// Попап окно регистрации

const RegisterModal = ({ onClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`${BASE_URL}/auth/local/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
        }),
      });
      const result = await res.json();

      if (result.jwt) {
        setSuccess(true);
        reset();
      } else {
        setError("Ошибка регистрации.");
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
        <h2>Регистрация</h2>
        {error && <p className="error">{error}</p>}
        {success ? (
          <p>Успешная регистрация! Теперь войдите.</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("username", { required: true })}
              placeholder="Имя пользователя"
            />
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
            />
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Пароль"
            />
            <button type="submit">Зарегистрироваться</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterModal;
