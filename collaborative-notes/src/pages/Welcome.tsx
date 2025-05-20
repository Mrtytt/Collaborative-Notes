import Footer from '../components/Footer';
import '../css/global.css';
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f8] text-slate-800 px-4">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-5xl font-semibold">Hoş Geldiniz</h1>
        <p className="mb-10 text-lg text-slate-600">
          Hedeflerinizi takip etmek, notlarınızı düzenlemek ve gelişiminizi görmek için hemen başlayın.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/register"
            className="px-6 py-3 text-sm font-medium text-white transition bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 focus:outline-none"
          >
            Kayıt Ol
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 text-sm font-medium text-black transition bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            Giriş Yap
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
