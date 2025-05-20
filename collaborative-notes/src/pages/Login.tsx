import React, { useState } from "react";
import { loginUser } from "../services/auth";
import "../css/global.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

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
    if (res.token) {
      localStorage.setItem("token", res.token);
      setMessage("Giriş başarılı! Hoş geldiniz.");
      navigate("/home");
    } else if (res.detail) {
      setMessage("Hata: " + res.detail);
    } else {
      setMessage("Beklenmeyen bir hata oluştu.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="px-4 py-6">
        <div className="grid items-center w-full max-w-6xl gap-6 md:grid-cols-2">
          <div className="border border-slate-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="mb-12">
                <h3 className="text-3xl font-semibold text-slate-900">
                  Giriş yap
                </h3>
                <p className="mt-6 text-sm leading-relaxed text-slate-500">
                  Hesabınıza giriş yapın ve olasılıklar dünyasını keşfedin.
                  Yolculuğunuz burada başlıyor!
                </p>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-800">
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full py-3 pl-4 pr-10 text-sm border rounded-lg text-slate-800 border-slate-300 outline-blue-600"
                    placeholder="test@test.com"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-800">
                  Şifre
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    value={form.password}
                    onChange={handleChange}
                    className="w-full py-3 pl-4 pr-10 text-sm border rounded-lg text-slate-800 border-slate-300 outline-blue-600"
                    placeholder="test123"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 rounded shrink-0 focus:ring-blue-500 border-slate-300"
                  />
                  <label
                    htmlFor="remember-me"
                    className="block ml-3 text-sm text-slate-500"
                  >
                    Beni Hatırla
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Şifremi unuttum
                  </a>
                </div>
              </div>

              <div className="!mt-12">
                <button
                  type="submit"
                  className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
                >
                  Giriş Yap
                </button>
                <p className="text-sm !mt-6 text-center text-slate-500">
                  Hesabını yok mu?
                  <a
                    href="/register"
                    className="ml-1 font-medium text-blue-600 hover:underline whitespace-nowrap"
                  >
                    Kayıt Ol
                  </a>
                </p>
                {message && (
                  <p className="mt-4 text-sm text-center text-red-600">
                    {message}
                  </p>
                )}
              </div>
            </form>
          </div>

          <div className="max-md:mt-8">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full aspect-[71/50] max-md:w-4/5 mx-auto block object-cover"
              alt="login img"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
