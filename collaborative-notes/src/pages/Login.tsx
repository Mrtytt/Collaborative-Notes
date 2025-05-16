import React, { useState } from "react";
import { loginUser } from "../services/auth";
import '../css/global.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await loginUser({ email, password });
    console.log("Login response:", response);
    // response.token varsa localStorage.setItem("token", response.token) ile saklayabilirsin
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md p-4 mx-auto">
      <input type="email" className="w-full p-2 mb-2 border" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="w-full p-2 mb-2 border" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" className="px-4 py-2 text-white bg-blue-500">Giriş Yap</button>
    </form>
  );
}

export default Login;
