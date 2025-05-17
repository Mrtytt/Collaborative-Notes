const API_URL = "http://localhost:8000/api/auth";

export async function registerUser(data: {
  username: string;
  email: string;
  password: string;
}) {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
}

export async function loginUser(data: {
  email: string;
  password: string;
}) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
}

export function isAuthorized(): boolean {
  const token = localStorage.getItem("token");
  return !!token; // varsa true döner, yoksa false
}

export function logoutUser() {
  localStorage.removeItem("token");
}
