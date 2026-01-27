import PriceCalculator from "../components/PriceCalculator";
import { ShieldCheck, Lift, Users } from "lucide-react";

export default function HomePage() {
  return (
    <div>
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
      {/* Trust Signals */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-12" id="hizmetler">
        <div className="flex flex-col items-center text-center">
          <ShieldCheck size={40} className="text-blue-700 mb-2" />
          <h3 className="font-bold text-lg mb-2">Sigortalı Taşımacılık</h3>
          <p>Taşınma sürecinizde eşyalarınız sigorta ile güvence altında.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Lift size={40} className="text-orange-500 mb-2" />
          <h3 className="font-bold text-lg mb-2">Asansörlü Nakliyat</h3>
          <p>Yüksek katlarda hızlı ve güvenli taşımacılık için asansörlü hizmet.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Users size={40} className="text-blue-700 mb-2" />
          <h3 className="font-bold text-lg mb-2">Müşteri Yorumları</h3>
          <p>Binlerce mutlu müşteri ve yüksek memnuniyet oranı.</p>
        </div>
      </section>
    </div>
  );
}
