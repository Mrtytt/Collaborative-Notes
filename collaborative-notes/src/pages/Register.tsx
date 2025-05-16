import React, { useState } from "react";
import { registerUser } from "../services/auth";
import '../css/global.css';
import { useNavigate } from "react-router-dom";


function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await registerUser(form);
    if (res.message === "User registered") {
      navigate("/");
      setMessage("Kayıt başarılı! Giriş yapabilirsiniz.");
    } else if (res.detail) {
      setMessage("Hata: " + res.detail);
    } else {
      setMessage("Beklenmeyen bir hata oluştu.");
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto">
      <h2 className="mb-4 text-xl font-bold">Kayıt Ol</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="username"
          placeholder="Kullanıcı Adı"
          value={form.username}
          onChange={handleChange}
          className="p-2 border rounded"
        />
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
          Kayıt Ol
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-center text-gray-700">{message}</p>}
    </div>
  );
}

export default Register;
