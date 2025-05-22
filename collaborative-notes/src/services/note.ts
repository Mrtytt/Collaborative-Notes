// src/api/note.ts

const NOTE_API_URL = "http://localhost:8000/api/notes";

// Tüm notları getir
export async function getNotes() {
  const token = localStorage.getItem("token");

  const response = await fetch(NOTE_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Notlar alınamadı");
  return await response.json();
}

// Yeni not ekle (başlık parametreli)
export const addNote = async (title: string) => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:8000/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title }),  // 👈 BURASI önemli!
  });

  if (!res.ok) {
    const error = await res.text();
    console.error("Hata:", error);
    throw new Error("Not eklenemedi");
  }

  return await res.json();
};

export const deleteNote = async (id: string) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`http://localhost:8000/api/notes/${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const error = await res.text();
    console.error("Hata:", error);
    throw new Error("Not silinemedi");
  }

  return await res.json();
};
