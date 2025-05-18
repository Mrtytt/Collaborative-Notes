import { ReactNode } from "react";

interface DrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
  children: ReactNode;
}

export default function Drawer({ isOpen, toggleDrawer, children }: DrawerProps) {
  return (
    <>
      {/* Drawer Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-60 bg-white shadow-md transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <ul className="p-4 space-y-4">{children}</ul>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleDrawer}
        className={`fixed top-4 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "left-64" : "left-4"
        }`}
      >
        <div className="p-2 text-white bg-blue-600 rounded shadow">☰</div>
      </button>
    </>
  );
}
