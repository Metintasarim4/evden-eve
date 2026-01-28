import Link from "next/link";
import { Phone, MapPin, Mail, Globe, Clock, Navigation } from 'lucide-react';

export default function Iletisim() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      
      {/* HEADER (Menü) */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-900">
            METİN <span className="text-orange-600">NAKLİYAT</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-600 hover:text-blue-900 font-medium transition">Ana Sayfa</Link>
            <Link href="/iletisim" className="text-blue-900 font-bold transition">İletişim</Link>
          </nav>
          <a href="https://wa.me/905432107058" className="bg-green-600 text-white px-6 py-2 rounded-full font-bold hover:bg-green-700 transition">
            WhatsApp
          </a>
        </div>
      </header>

      {/* İLETİŞİM BAŞLIK ALANI */}
      <section className="bg-slate-900 text-white pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Bizimle İletişime Geçin</h1>
        <p className="text-gray-300 text-lg">Türkiye'nin her yerine 7/24 hizmet veriyoruz.</p>
      </section>

      {/* BİLGİ KARTLARI */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-24 relative z-10">
          
          {/* Telefon Kartı */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-orange-600 text-center hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Telefon & WhatsApp</h3>
            <p className="text-gray-600 mb-4">7/24 Bize ulaşabilirsiniz</p>
            <a href="tel:05432107058" className="text-2xl font-black text-slate-900 hover:text-orange-600 block">
              0543 210 70 58
            </a>
          </div>

          {/* Adres Kartı */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-blue-900 text-center hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-blue-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Merkez Adres</h3>
            <p className="text-gray-600 font-medium">
              Merkez, Başakşehir <br /> İstanbul, Türkiye
            </p>
            <div className="mt-4 inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
              📍 Konum Al
            </div>
          </div>

          {/* Şubeler Kartı */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-green-600 text-center hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hizmet Bölgelerimiz</h3>
            <p className="text-gray-600 mb-2">Tüm Türkiye Geneli</p>
            <p className="text-lg font-bold text-slate-800 italic">
              "Her İle ve İlçeye Ulaşmak Mümkündür"
            </p>
          </div>
        </div>
      </section>

      {/* HARİTA VE EKSTRA BİLGİ */}
      <section className="py-12 bg-white mb-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
             <h2 className="text-3xl font-bold text-slate-900 mb-6">Ofisimize Bekleriz</h2>
             <p className="text-gray-600 mb-6 leading-relaxed">
               Taşınma planınızı yüz yüze konuşmak, sözleşme detaylarını incelemek veya sadece bir çayımızı içmek için Başakşehir'deki ofisimize her zaman bekleriz.
             </p>
             <ul className="space-y-4">
               <li className="flex items-center gap-3 text-gray-700">
                 <Clock className="w-5 h-5 text-orange-600" /> 
                 <span>Pazartesi - Cumartesi: <strong>08:30 - 19:30</strong></span>
               </li>
               <li className="flex items-center gap-3 text-gray-700">
                 <Navigation className="w-5 h-5 text-orange-600" /> 
                 <span>Pazar: <strong>Randevu ile Hizmet</strong></span>
               </li>
             </ul>
          </div>
          
          {/* Temsili Harita (Google Maps Embed Kodu Buraya Gelebilir) */}
          <div className="w-full md:w-1/2 h-80 bg-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-inner">
            <div className="absolute inset-0 bg-slate-300 animate-pulse"></div>
            <span className="relative z-10 text-gray-500 font-bold">
               🗺️ Google Harita Yüklenecek... <br/> (Başakşehir, İstanbul)
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-10 text-center border-t border-gray-800">
        <div className="container mx-auto">
            <div className="text-2xl font-bold text-white mb-4">
                METİN <span className="text-orange-600">NAKLİYAT</span>
            </div>
            <p className="text-sm text-gray-500">&copy; 2026 Metin Nakliyat. Tüm hakları saklıdır.</p>
        </div>
      </footer>

    </main>
  );
}