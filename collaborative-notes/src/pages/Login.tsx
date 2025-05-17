import React, { useState } from "react";
import { loginUser } from "../services/auth";
import '../css/global.css';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await loginUser(form);
    console.log("Gelen yanıt:", res); // <-- bu kısmı geliştirici konsolda incele
    if (res.token) {
      localStorage.setItem("access_token", res.token);
      navigate("/home");
      setMessage("Giriş başarılı! Hoş geldiniz.");
    } else if (res.detail) {
      setMessage("Hata: " + res.detail);
    } else {
      setMessage("Beklenmeyen bir hata oluştu.");
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto">
      <h2 className="mb-4 text-xl font-bold">Giriş Yap</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input
          type="email"
          name="email"
          placeholder="E-posta"
          value={form.email}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Şifre"
          value={form.password}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded">
          Giriş Yap
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-center text-gray-700">{message}</p>}
    </div>
  );
}

export default Login;
