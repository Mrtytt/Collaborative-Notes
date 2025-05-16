import '../css/global.css';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-4xl font-bold">Hoş Geldiniz</h1>
      <div className="mt-4">
        <a href="/register" className="text-blue-500 hover:underline">Kayıt Ol</a>
        <span className="mx-2">|</span>
        <a href="/login" className="text-blue-500 hover:underline">Giriş Yap</a>
      </div>
    </div>
  )
}
