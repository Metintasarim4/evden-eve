'use client';

import Link from "next/link";
import HeroSlider from "../components/HeroSlider";
import QuoteWizard from "../components/QuoteWizard";
import HowItWorks from "../components/HowItWorks";     // Modül 1
import Testimonials from "../components/Testimonials"; // Modül 2

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      
      {/* HEADER (ÜST MENÜ) */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50 transition-all duration-300 bg-opacity-95 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-900">
            METİN <span className="text-orange-600">NAKLİYAT</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-blue-900 font-bold transition">Ana Sayfa</Link>
            <Link href="/hizmetler" className="text-gray-800 hover:text-blue-900 font-medium transition">Hizmetler</Link>
            <Link href="/iletisim" className="text-gray-800 hover:text-blue-900 font-medium transition">İletişim</Link>
          </nav>
          <Link href="/iletisim" className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-700 transition shadow-lg hover:shadow-orange-200">
            Teklif Al
          </Link>
        </div>
      </header>

      {/* HERO SECTION - SLIDER VE ROBOT */}
      <section className="relative w-full min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        <HeroSlider />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left text-white">
              <div className="inline-block bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                🚀 2026'nın En İyi Nakliyat Firması
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-xl">
                Taşınmak Hiç Bu Kadar <br />
                <span className="text-orange-500">Kolay Olmamıştı</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-lg mx-auto lg:mx-0 drop-shadow-md opacity-90">
                Eşyalarınızı sigortalı, asansörlü ve uzman ekibimizle taşıyoruz. Hemen fiyatı hesapla, anında teklif cebine gelsin.
              </p>
              <div className="flex justify-center lg:justify-start gap-8 opacity-80">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-white/20 rounded-lg">🛡️</div>
                  <span className="font-bold">Sigortalı</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-white/20 rounded-lg">🚛</div>
                  <span className="font-bold">Asansörlü</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <QuoteWizard />
            </div>
          </div>
        </div>
      </section>

      {/* ÖZELLİKLER (3 KUTU) */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="group p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl group-hover:scale-110 transition">🛡️</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Sigortalı Taşımacılık</h3>
              <p className="text-gray-600">Tüm eşyalarınız taşıma süreci boyunca Allianz Sigorta güvencesi altındadır.</p>
            </div>
            <div className="group p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl group-hover:scale-110 transition">🚛</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Asansörlü Nakliyat</h3>
              <p className="text-gray-600">Yüksek katlara son teknoloji modüler asansörlerimiz ile çiziksiz taşıma.</p>
            </div>
            <div className="group p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl group-hover:scale-110 transition">🤝</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Sabit Fiyat Garantisi</h3>
              <p className="text-gray-600">Sürpriz ek ücretler yok. İş başında konuşulan fiyat neyse odur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- YENİ EKLENEN BÖLÜMLER --- */}
      
      {/* 1. NASIL ÇALIŞIYORUZ? (Gri Arkaplan) */}
      <HowItWorks />

      {/* 2. MÜŞTERİ YORUMLARI (Beyaz Arkaplan) */}
      <Testimonials />

    </main>
  );
}