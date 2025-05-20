import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthorized, logoutUser } from "../services/auth";
import "../css/global.css";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";

export default function HomePage() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (!isAuthorized()) {
      navigate("/404");
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
      />
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 w-full">
        <h1 className="text-4xl font-bold">Welcome to Home Page</h1>
        <p className="mt-4 text-lg">You are authorized to view this page.</p>
      </div>
      <Footer/>
    </div>
  );
}
