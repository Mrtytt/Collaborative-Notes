import React from "react";
import "../css/global.css";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";

export default function Help() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Drawer
        isOpen={isDrawerOpen}
        toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
      />

      <div className="flex flex-col items-center justify-center w-full p-4">
        <div className="w-full max-w-3xl p-8 bg-white border border-blue-100 shadow-xl rounded-2xl">
          <h1 className="mb-4 text-3xl font-bold text-center text-blue-600 md:text-4xl">
            Yardım
          </h1>
          <p className="mb-6 text-lg text-center text-gray-600">
            Uygulamayı nasıl kullanacağınız ve sıkça sorulan sorularla ilgili bilgiler aşağıdadır.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Uygulama Kullanımı:</strong> Sol menüyü kullanarak notlar, profil ve ayarlar gibi bölümlere erişebilirsiniz.
            </li>
            <li>
              <strong>Giriş Sorunları:</strong> Giriş yaparken sorun yaşıyorsanız, şifrenizi sıfırlamayı veya internet bağlantınızı kontrol etmeyi deneyin.
            </li>
            <li>
              <strong>Özelleştirme:</strong> Profil ayarları bölümünden görünümü ve tercihlerinizi kişiselleştirebilirsiniz.
            </li>
            <li>
              <strong>Destek Almak:</strong> Daha fazla yardım için lütfen iletişim formunu kullanarak bizimle iletişime geçin.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
