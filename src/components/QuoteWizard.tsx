'use client';

import { useState } from 'react';
import { MapPin, Calendar, Home, Phone, ArrowRight, ArrowLeft, CheckCircle, MessageCircle } from 'lucide-react';

export default function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    room: '',
    date: '',
    phone: ''
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const selectRoom = (roomType: string) => {
    setFormData({ ...formData, room: roomType });
    handleNext();
  };

  // --- WHATSAPP GÖNDERME FONKSİYONU ---
  const sendToWhatsapp = () => {
    const phoneNumber = "905432107058"; // Senin Numaran
    const message = `Merhaba, Metin Nakliyat sitesinden teklif almak istiyorum.%0A%0A📍 *Nereden:* ${formData.from}%0A📍 *Nereye:* ${formData.to}%0A🏠 *Eşya Durumu:* ${formData.room}%0A📅 *Tarih:* ${formData.date}%0A📞 *Müşteri Tel:* ${formData.phone}`;
    
    // WhatsApp'ı yeni sekmede aç
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 relative z-20">
      
      {/* Üst İlerleme Çubuğu */}
      <div className="w-full bg-gray-100 h-2">
        <div className="bg-orange-600 h-2 transition-all duration-500" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">ADIM {step} / {totalSteps}</span>
          {step > 1 && (
            <button onClick={handleBack} className="text-gray-400 hover:text-gray-600 text-sm flex items-center">
              <ArrowLeft className="w-4 h-4 mr-1" /> Geri
            </button>
          )}
        </div>

        {/* ADIM 1: ROTA */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-5 duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Nereden Nereye?</h2>
            <div className="space-y-4">
              <div className="relative">
                <MapPin className="absolute left-4 top-4 text-blue-900 w-5 h-5" />
                <input type="text" placeholder="Nereden? (İl/İlçe)" value={formData.from} onChange={(e) => setFormData({...formData, from: e.target.value})} className="w-full pl-12 p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-gray-800 font-medium" />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 text-orange-600 w-5 h-5" />
                <input type="text" placeholder="Nereye? (İl/İlçe)" value={formData.to} onChange={(e) => setFormData({...formData, to: e.target.value})} className="w-full pl-12 p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-gray-800 font-medium" />
              </div>
              <button onClick={handleNext} className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition flex items-center justify-center gap-2">
                Devam Et <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* ADIM 2: ODA SAYISI */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-5 duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Eviniz Kaç Oda?</h2>
            <div className="grid grid-cols-2 gap-3">
              {['1+0', '1+1', '2+1', '3+1', '4+1', 'Villa'].map((r) => (
                <button key={r} onClick={() => selectRoom(r)} className={`p-4 border-2 rounded-xl font-medium transition-all hover:border-orange-500 hover:bg-orange-50 text-left flex flex-col gap-2 ${formData.room === r ? 'border-orange-500 bg-orange-50' : 'border-gray-100 text-gray-600'}`}>
                  <Home className={`w-6 h-6 ${formData.room === r ? 'text-orange-600' : 'text-gray-300'}`} />
                  {r}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ADIM 3: TARİH */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-5 duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Ne Zaman?</h2>
            <div className="relative mb-6">
              <Calendar className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
              <input type="date" onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full pl-12 p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-gray-800 font-medium" />
            </div>
            <button onClick={handleNext} className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition">
              Tarihi Onayla
            </button>
          </div>
        )}

        {/* ADIM 4: SONUÇ VE WHATSAPP BUTONU */}
        {step === 4 && (
          <div className="text-center animate-in fade-in slide-in-from-right-5 duration-300">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Bilgiler Hazır!</h2>
            <p className="text-gray-500 mb-6">Numaranızı girin ve WhatsApp üzerinden anında fiyat alın.</p>
            
            <div className="relative mb-4">
              <Phone className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
              <input type="tel" placeholder="05XX XXX XX XX" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full pl-12 p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none text-gray-900 font-bold text-lg" />
            </div>
            
            {/* WHATSAPP BUTONU */}
            <button onClick={sendToWhatsapp} className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition shadow-lg hover:shadow-green-200 flex items-center justify-center gap-2">
              <MessageCircle className="w-6 h-6" />
              WHATSAPP İLE FİYAT AL
            </button>
            <p className="text-xs text-gray-400 mt-4">Butona tıkladığınızda WhatsApp sohbeti açılacaktır.</p>
          </div>
        )}
      </div>
    </div>
  );
}