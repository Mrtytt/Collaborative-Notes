// components/NoteDrawer.tsx
import React, { useEffect, useState } from "react";
import { Plus, ChevronDown, ChevronRight, X } from "lucide-react";
import { getNotes, addNote, deleteNote } from "../services/note";
import "../css/global.css";
import { Note } from "../types/Note";
import AddNoteModal from "./AddNote"; // Modal bileşenini içe aktarın

export default function NoteDrawer() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [notesOpen, setNotesOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal görünürlüğü için durum

  useEffect(() => {
    getNotes().then(setNotes).catch(console.error);
  }, []);

  const handleAddNote = async (title: string) => {
    try {
      const newNote = await addNote(title);
      setNotes((prev) => [newNote, ...prev]);
    } catch (err) {
      console.error("Not eklenemedi:", err);
    }
  };

  const handleDeleteNote = async (noteId: string) => {
    try {
      await deleteNote(noteId);
      setNotes((prev) => prev.filter((note) => note._id !== noteId));
    } catch (err) {
      console.error("Not silinemedi:", err);
    }
  };

  return (
    <div className="h-full p-4 bg-white border-r shadow w-60">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setNotesOpen(!notesOpen)}
          >
            {notesOpen ? (
              <ChevronDown size={16} className="text-gray-600" />
            ) : (
              <ChevronRight size={16} className="text-gray-600" />
            )}
            <span className="font-semibold text-gray-800">Notlarım</span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)} // Modalı aç
            className="text-blue-600 hover:text-blue-800"
          >
            <Plus size={18} />
          </button>
        </div>

        {notesOpen && (
          <ul className="pl-1 space-y-1 text-sm text-gray-700 transition-all">
            {notes.map((note) => (
              <li
                key={note._id}
                className="flex items-center justify-between px-2 py-1 rounded group hover:bg-gray-100"
              >
                <span className="truncate">{note.title}</span>
                <button
                  onClick={() => handleDeleteNote(note._id)}
                  className="invisible text-gray-400 transition group-hover:visible hover:text-red-500"
                >
                  <X size={14} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Modal bileşenini render edin */}
      <AddNoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddNote}
      />
    </div>
  );
}
