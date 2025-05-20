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

export function getCurrentUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export const fetchUserProfile = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Profil alınamadı");
  }

  return await response.json();
};

export const updateUserProfile = async (data: { username: string; email: string; password: string }) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Profil güncelleme başarısız.");
  }

  return await response.json();
}

