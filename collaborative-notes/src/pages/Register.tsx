import React, { useState } from "react";
import { registerUser } from "../services/auth";
import '../css/global.css';
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

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
      setMessage("Kayıt başarılı! Giriş yapabilirsiniz.");
      navigate("/");
    } else if (res.detail) {
      setMessage("Hata: " + res.detail);
    } else {
      setMessage("Beklenmeyen bir hata oluştu.");
    }
  };

  return (
    <div className="flex flex-col justify-center p-4 sm:h-screen">
      <div className="w-full max-w-md p-8 mx-auto border border-slate-300 rounded-2xl">
        <div className="mb-12 text-center">
          <h3 className="text-3xl font-semibold text-slate-900">Kayıt Ol</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-800">Kullanıcı Adı</label>
              <input
                name="username"
                type="text"
                value={form.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-sm bg-white border rounded-md text-slate-800 border-slate-300 outline-blue-500"
                placeholder="test"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-800">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-sm bg-white border rounded-md text-slate-800 border-slate-300 outline-blue-500"
                placeholder="test@test.com"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-800">Şifre</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-sm bg-white border rounded-md text-slate-800 border-slate-300 outline-blue-500"
                placeholder="test123"
              />
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-blue-600 rounded shrink-0 focus:ring-blue-500 border-slate-300"
              />
              <label htmlFor="remember-me" className="block ml-3 text-sm text-slate-800">
                Kabul ediyorum <a href="javascript:void(0);" className="ml-1 font-medium text-blue-600 hover:underline">Şartlar ve Koşullar</a>
              </label>
            </div>
          </div>

          <div className="mt-12">
            <button
              type="submit"
              className="w-full px-4 py-3 text-sm font-medium tracking-wider text-white bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 focus:outline-none"
            >
              Kayıt Ol
            </button>
          </div>
          {message && (
            <p className="mt-4 text-sm text-center text-red-500">{message}</p>
          )}
          <p className="mt-6 text-sm text-center text-slate-800">
            Zaten bir hesabınız var mı?
            <a href="/login" className="ml-1 font-medium text-blue-600 hover:underline">Giriş Yap</a>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
