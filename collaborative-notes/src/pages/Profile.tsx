import React from "react";
import "../css/global.css";
import { logoutUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">User Profile</h1>
      <p className="mt-4 text-lg">Manage your profile settings here.</p>
      <button
        onClick={handleLogout}
        className="px-4 py-2 mt-6 text-white bg-blue-600 rounded"
      >
        Log Out
      </button>
    </div>
  );
}
