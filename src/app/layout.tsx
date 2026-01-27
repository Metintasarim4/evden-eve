import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Metin Nakliyat - Türkiye'nin 81 İlinde Güvenli Taşımacılık",
  description: "Evden eve nakliyat, sigortalı taşımacılık ve uygun fiyatlarla Türkiye'nin her yerinde hizmet."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="stylesheet" href="/output.css" />
      </head>
      <body className="bg-gray-50 text-gray-900">
        {/* Header */}
        <header className="bg-white shadow py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Metin Nakliyat" className="h-10" />
            <span className="font-bold text-2xl text-blue-700">Metin Nakliyat</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <span className="text-sm text-gray-600">Başakşehir, İstanbul</span>
            <a href="#hizmetler" className="text-blue-700 font-medium hover:underline">Hizmetler</a>
            <a href="https://wa.me/905432107058" target="_blank" rel="noopener" className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold shadow hover:bg-green-600 transition">WhatsApp: 0543 210 70 58</a>
          </div>
        </header>
        {/* Main Content */}
        <main>{children}</main>
        {/* Footer */}
        <footer className="bg-blue-900 text-white py-10 mt-16">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {/* SEO Footer Links - Tüm iller ve ilçeler */}
            {require("../data/locations").locations.map(il => (
              <div key={il.il}>
                <a href={`/${il.il}/merkez`} className="font-bold hover:underline">{il.ad} Nakliyat</a>
                <ul className="mt-2 text-sm">
                  {il.ilceler.map(ilce => (
                    <li key={ilce.ilce}><a href={`/${il.il}/${ilce.ilce}`} className="hover:underline">{ilce.ad}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 text-xs">
            <div>İletişim: Başakşehir, İstanbul | WhatsApp: <a href="https://wa.me/905432107058" className="underline">0543 210 70 58</a></div>
            © 2026 Metin Nakliyat. Tüm hakları saklıdır.
          </div>
        </footer>
      </body>
    </html>
  );
}
