'use client';

import { PhoneCall, PackageCheck, Truck, Home } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: "1. Ekspertiz & Planlama",
    desc: "Bize ulaştığınızda eşyalarınızı inceliyor (görüntülü veya yerinde), size en uygun aracı ve ekibi belirliyoruz."
  },
  {
    icon: PackageCheck,
    title: "2. Ambalajlama",
    desc: "Taşıma günü özel ambalaj malzemeleriyle mobilyalarınızı sarıyor, kırılabilecek eşyalarınızı kutuluyoruz."
  },
  {
    icon: Truck,
    title: "3. Güvenli Taşıma",
    desc: "Eşyalarınızı asansör sistemimizle araca yüklüyor, sarsıntısız bir yolculukla yeni adresinize götürüyoruz."
  },
  {
    icon: Home,
    title: "4. Kurulum & Teslimat",
    desc: "Yeni evinizde eşyaları odalarına yerleştiriyor, mobilyalarınızın montajını yapıp anahtar teslim sunuyoruz."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Süreç Nasıl İşliyor?</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">4 Adımda Yeni Evinizdesiniz</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
           {/* Çizgi Efekti (Sadece büyük ekranda) */}
           <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300 text-center group border border-gray-100">
              <div className="w-24 h-24 bg-white border-4 border-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-orange-500 transition duration-500">
                <step.icon className="w-10 h-10 text-slate-700 group-hover:text-orange-600 transition" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}