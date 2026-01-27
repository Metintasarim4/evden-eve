import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Metin Nakliyat - Türkiye'nin 81 İlinde Güvenli Taşımacılık",
  description: "Evden eve nakliyat, sigortalı taşımacılık ve uygun fiyatlarla Türkiye'nin her yerinde hizmet."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-gray-50 text-gray-900">
        {/* Header */}
        <header className="bg-white shadow py-4 px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Metin Nakliyat" className="h-10" />
            <span className="font-bold text-2xl text-blue-700">Metin Nakliyat</span>
          </div>
          <nav className="flex gap-6">
            <a href="#hizmetler" className="text-blue-700 font-medium hover:underline">Hizmetler</a>
            <a href="https://wa.me/905555555555" target="_blank" rel="noopener" className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold shadow hover:bg-green-600 transition">WhatsApp</a>
          </nav>
        </header>
        {/* Main Content */}
        <main>{children}</main>
        {/* Footer */}
        <footer className="bg-blue-900 text-white py-10 mt-16">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {/* SEO Footer Links örnek */}
            {["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana", "Konya", "Gaziantep"].map(il => (
              <div key={il}>
                <a href={`/${il.toLowerCase()}/merkez`} className="font-bold hover:underline">{il} Nakliyat</a>
                <ul className="mt-2 text-sm">
                  {["Merkez", "Kadıköy", "Çankaya", "Osmangazi"].map(ilce => (
                    <li key={ilce}><a href={`/${il.toLowerCase()}/${ilce.toLowerCase()}`} className="hover:underline">{ilce}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 text-xs">© 2026 Metin Nakliyat. Tüm hakları saklıdır.</div>
        </footer>
      </body>
    </html>
  );
}
