import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metin Nakliyat - Güvenli ve Sigortalı Taşımacılık",
  description: "Türkiye'nin 81 iline asansörlü, sigortalı evden eve nakliyat hizmeti. Hemen fiyat teklifi alın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        
        {/* Sayfa İçeriği Buraya Gelecek */}
        {children}

        {/* --- GLOBAL FOOTER --- */}
        <footer className="bg-gray-900 text-white py-12 mt-auto border-t border-gray-800 relative z-50">
          <div className="container mx-auto px-4">
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
              
              {/* Sol Taraf: Marka ve Açıklama */}
              <div className="text-center md:text-left max-w-xl">
                 <div className="text-3xl font-bold text-white mb-4">
                    METİN <span className="text-orange-600">NAKLİYAT</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  1996 yılından beri sektörün lideri. Geniş araç filomuz, tecrübeli personelimiz ve "Sıfır Hasar" prensibimizle eşyalarınızı Türkiye'nin her yerine güvenle taşıyoruz.
                </p>
                <div className="flex justify-center md:justify-start gap-4 text-sm font-bold text-gray-500">
                    <span className="flex items-center gap-1">🛡️ Sigortalı</span>
                    <span className="flex items-center gap-1">🚛 Asansörlü</span>
                    <span className="flex items-center gap-1">🤝 Sözleşmeli</span>
                </div>
              </div>

              {/* Sağ Taraf: Hızlı Linkler */}
              <div className="flex gap-8 text-sm font-medium">
                  <Link href="/" className="hover:text-orange-500 transition">Ana Sayfa</Link>
                  <Link href="/hizmetler" className="hover:text-orange-500 transition">Hizmetler</Link>
                  <Link href="/bolge" className="hover:text-orange-500 transition">Hizmet Bölgeleri</Link>
                  <Link href="/iletisim" className="hover:text-orange-500 transition">İletişim</Link>
              </div>

            </div>

            {/* Alt Telif Hakkı ve İMZA Kısmı */}
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
              
              <div className="flex flex-col md:flex-row items-center gap-2">
                  <p>&copy; {new Date().getFullYear()} Metin Nakliyat. Tüm hakları saklıdır.</p>
                  <span className="hidden md:block text-gray-700">|</span>
                  {/* İMZA BURADA */}
                  <p>
                    Bu Site <strong className="text-gray-300 hover:text-orange-500 transition cursor-pointer">Metin Tasarım</strong> Tarafından Yapılmıştır
                  </p>
              </div>

              <div className="flex gap-4">
                  <span className="cursor-pointer hover:text-white">Gizlilik Politikası</span>
                  <span className="cursor-pointer hover:text-white">Kullanım Şartları</span>
              </div>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}