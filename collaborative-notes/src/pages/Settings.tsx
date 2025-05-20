import React, { useState } from "react";
import "../css/global.css";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";

export default function Settings() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Drawer
        isOpen={isDrawerOpen}
        toggleDrawer={function (): void {
          setIsDrawerOpen(!isDrawerOpen);
        }}
      ></Drawer>
      <h1 className="text-4xl font-bold">Settings Page</h1>
      <Footer />
    </div>
  );
}
