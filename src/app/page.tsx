import PriceCalculator from "../components/PriceCalculator";
import { ShieldCheck, Truck, Users } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center bg-blue-700">
          <img src="/nakliyat-hero.jpg" alt="Evden Eve Nakliyat" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Türkiye'nin 81 İlinde Güvenli Evden Eve Nakliyat</h1>
            <div className="max-w-lg mx-auto">
              <PriceCalculator />
            </div>
          </div>
        </section>
        {/* Trust Signals & Hizmetler */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-12" id="hizmetler">
          <div className="flex flex-col items-center text-center">
            <ShieldCheck size={40} className="text-blue-700 mb-2" />
            <h3 className="font-bold text-lg mb-2">Sigortalı Taşımacılık</h3>
            <p>Taşınma sürecinizde eşyalarınız sigorta ile güvence altında.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Truck size={40} className="text-orange-500 mb-2" />
            <h3 className="font-bold text-lg mb-2">Asansörlü Nakliyat</h3>
            <p>Yüksek katlarda hızlı ve güvenli taşımacılık için asansörlü hizmet.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users size={40} className="text-blue-700 mb-2" />
            <h3 className="font-bold text-lg mb-2">Müşteri Yorumları</h3>
            <p>Binlerce mutlu müşteri ve yüksek memnuniyet oranı.</p>
          </div>
        </section>

        {/* Müşteri Yorumları */}
        <section className="max-w-4xl mx-auto py-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Müşteri Yorumları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-lg italic mb-2">"Taşınma sürecim çok kolay ve güvenli geçti. Eşyalarım sorunsuz taşındı!"</p>
              <div className="text-sm text-gray-600">- Ayşe K., İstanbul</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-lg italic mb-2">"Asansörlü nakliyat sayesinde yüksek katta bile hiç sorun yaşamadım."</p>
              <div className="text-sm text-gray-600">- Mehmet T., Ankara</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-lg italic mb-2">"Fiyatlar çok uygun ve ekip çok profesyonel!"</p>
              <div className="text-sm text-gray-600">- Zeynep D., İzmir</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-lg italic mb-2">"Sigortalı taşımacılık ile içim çok rahat etti."</p>
              <div className="text-sm text-gray-600">- Ali Y., Bursa</div>
            </div>
          </div>
        </section>
      </div>
      {/* Sidebar - Fiyat Hesaplama Modülü */}
      <aside className="w-full lg:w-96 bg-white/80 shadow-lg p-6 lg:sticky lg:top-20 h-fit">
        <h2 className="text-xl font-bold text-blue-700 mb-4">Hızlı Fiyat Hesaplama</h2>
        <PriceCalculator />
      </aside>
    </div>
  );
}
