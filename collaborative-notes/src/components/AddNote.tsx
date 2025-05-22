import { useState } from "react";
import ReactDOM from "react-dom";

interface AddNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string) => void;
}

const AddNoteModal = ({ isOpen, onClose, onSave }: AddNoteModalProps) => {
  const [title, setTitle] = useState("");

  const handleSave = () => {
    if (title.trim() === "") return;
    onSave(title.trim());
    setTitle("");
    onClose();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded shadow w-96">
        <h2 className="mb-4 text-lg font-semibold">Yeni Not Ekle</h2>
        <input
          type="text"
          className="w-full px-3 py-2 mb-4 border rounded"
          placeholder="Not başlığı"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            İptal
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default AddNoteModal;