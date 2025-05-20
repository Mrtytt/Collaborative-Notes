import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full py-4 text-center bg-white border-t border-blue-100">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Tüm hakları saklıdır.
      </p>
    </footer>
  );
}
