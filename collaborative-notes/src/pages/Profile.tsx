import React, { useEffect, useState } from "react";
import "../css/global.css";
import {
  logoutUser,
  fetchUserProfile,
  updateUserProfile,
} from "../services/auth";
import { useNavigate } from "react-router-dom";
import { User } from "../types/User";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await updateUserProfile(formData);
      alert("Profil başarıyla güncellendi!");
    } catch (error) {
      console.error("Profil güncellenemedi:", error);
      alert("Bir hata oluştu.");
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await fetchUserProfile();
        setUser(data);
        setFormData({
          username: data.username,
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        console.error("Profil alınamadı:", error);
        navigate("/home");
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Drawer
        isOpen={isDrawerOpen}
        toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
      />
      <div className="flex flex-col items-center justify-center w-1/4 p-6 bg-white rounded shadow min-h-1/2">
        <h1 className="mb-4 text-xl font-bold text-center">Profil Bilgileri</h1>
        <label className="block mb-2">Kullanıcı Adı</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded"
        />

        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <label className="block mb-2">Şifre</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <button
          onClick={handleUpdate}
          className="w-full px-4 py-2 mb-4 text-white bg-green-600 rounded"
        >
          Güncelle
        </button>

        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 text-white bg-blue-600 rounded"
        >
          Çıkış Yap
        </button>
      </div>
      <Footer />
    </div>
  );
}
