import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/global.css";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Sayfa Bulunamadı</h1>
      <p className="mt-4 text-lg">Aradığınız sayfa mevcut değil.</p>
      <button
        onClick={handleGoBack}
        className="px-4 py-2 mt-6 text-white bg-blue-600 rounded"
      >
        Geri Dön
      </button>
    </div>
  );
}
