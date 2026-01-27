import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2, ArrowRight, Home, Lift, Users } from "lucide-react";

const ILLER = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana", "Konya", "Gaziantep", "Kayseri", "Mersin", "Eskişehir", "Samsun", "Trabzon", "Erzurum", "Diyarbakır", "Şanlıurfa", "Tekirdağ", "Hatay", "Manisa", "Balıkesir"];
const ILCE = ["Merkez", "Çankaya", "Kadıköy", "Keçiören", "Osmangazi", "Yıldırım", "Küçükçekmece", "Bağcılar", "Bornova", "Karşıyaka"];
const ODA = ["1+1", "2+1", "3+1", "4+1", "5+1+"];
const KAT = ["Giriş", "1. Kat", "2. Kat", "3. Kat", "4. Kat", "5. Kat+"];

function hesaplaFiyat({ oda, mesafe, kat, asansor }) {
  const tabanFiyat = 8000;
  const odaCarpan = 1 + ODA.indexOf(oda) * 0.2;
  const katCarpan = 1 + KAT.indexOf(kat) * 0.1;
  const asansorCarpan = asansor ? 0.95 : 1.15;
  const mesafeCarpan = 1 + mesafe / 300;
  const minFiyat = Math.round(tabanFiyat * odaCarpan * katCarpan * asansorCarpan * mesafeCarpan);
  const maxFiyat = Math.round(minFiyat * 1.25);
  return { minFiyat, maxFiyat };
}

const PriceCalculator = () => {
  const [step, setStep] = useState(0);
  const [fromIl, setFromIl] = useState("");
  const [fromIlce, setFromIlce] = useState("");
  const [toIl, setToIl] = useState("");
  const [toIlce, setToIlce] = useState("");
  const [oda, setOda] = useState(ODA[0]);
  const [kat, setKat] = useState(KAT[0]);
  const [asansor, setAsansor] = useState(true);
  const [mesafe, setMesafe] = useState(50);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else setShowResult(true);
  };
  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const fiyat = hesaplaFiyat({ oda, mesafe, kat, asansor });

  return (
    <div className="bg-white/90 rounded-xl shadow-lg p-6 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-blue-700 flex items-center gap-2"><Home size={24}/> Fiyat Hesaplama</h2>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        {step === 0 && (
          <div>
            <label className="block mb-2 font-medium">Nereden (İl)</label>
            <select className="w-full p-2 border rounded" value={fromIl} onChange={e => setFromIl(e.target.value)}>
              <option value="">Seçiniz</option>
              {ILLER.map(il => <option key={il} value={il}>{il}</option>)}
            </select>
            <label className="block mt-4 mb-2 font-medium">Nereden (İlçe)</label>
            <select className="w-full p-2 border rounded" value={fromIlce} onChange={e => setFromIlce(e.target.value)}>
              <option value="">Seçiniz</option>
              {ILCE.map(ilce => <option key={ilce} value={ilce}>{ilce}</option>)}
            </select>
          </div>
        )}
        {step === 1 && (
          <div>
            <label className="block mb-2 font-medium">Nereye (İl)</label>
            <select className="w-full p-2 border rounded" value={toIl} onChange={e => setToIl(e.target.value)}>
              <option value="">Seçiniz</option>
              {ILLER.map(il => <option key={il} value={il}>{il}</option>)}
            </select>
            <label className="block mt-4 mb-2 font-medium">Nereye (İlçe)</label>
            <select className="w-full p-2 border rounded" value={toIlce} onChange={e => setToIlce(e.target.value)}>
              <option value="">Seçiniz</option>
              {ILCE.map(ilce => <option key={ilce} value={ilce}>{ilce}</option>)}
            </select>
            <label className="block mt-4 mb-2 font-medium">Tahmini Mesafe (km)</label>
            <input type="number" className="w-full p-2 border rounded" value={mesafe} min={1} max={2000} onChange={e => setMesafe(Number(e.target.value))} />
          </div>
        )}
        {step === 2 && (
          <div>
            <label className="block mb-2 font-medium">Oda Sayısı</label>
            <select className="w-full p-2 border rounded" value={oda} onChange={e => setOda(e.target.value)}>
              {ODA.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        )}
        {step === 3 && (
          <div>
            <label className="block mb-2 font-medium">Kat Durumu</label>
            <select className="w-full p-2 border rounded" value={kat} onChange={e => setKat(e.target.value)}>
              {KAT.map(k => <option key={k} value={k}>{k}</option>)}
            </select>
            <label className="block mt-4 mb-2 font-medium">Asansör Var mı?</label>
            <div className="flex gap-4">
              <button className={`px-4 py-2 rounded ${asansor ? "bg-blue-600 text-white" : "bg-gray-200"}`} onClick={() => setAsansor(true)}><Lift size={18}/> Evet</button>
              <button className={`px-4 py-2 rounded ${!asansor ? "bg-blue-600 text-white" : "bg-gray-200"}`} onClick={() => setAsansor(false)}><Lift size={18}/> Hayır</button>
            </div>
          </div>
        )}
        {showResult && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">Tahmini Fiyat Aralığı</div>
              <div className="text-3xl font-semibold text-blue-700 mb-4">{fiyat.minFiyat.toLocaleString()} TL - {fiyat.maxFiyat.toLocaleString()} TL</div>
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold shadow hover:bg-orange-700 transition">Hemen Randevu Al</button>
            </div>
          </motion.div>
        )}
        <div className="flex justify-between mt-6">
          {step > 0 && <button className="text-blue-600" onClick={handlePrev}><ArrowRight className="rotate-180 inline"/> Geri</button>}
          {!showResult && <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleNext}>İleri <ArrowRight className="inline"/></button>}
        </div>
      </motion.div>
    </div>
  );
};

export default PriceCalculator;
