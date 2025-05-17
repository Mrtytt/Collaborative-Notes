import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthorized , logoutUser} from "../services/auth";
import "../css/global.css"; 

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized()) {
      navigate("/404");
    }
  }, []);
  
  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to Home Page</h1>
      <p className="mt-4 text-lg">You are authorized to view this page.</p>
      <button
        onClick={handleLogout}
        className="px-4 py-2 mt-6 text-white bg-blue-600 rounded"
      >
        Log Out
      </button>
    </div>
  );
}