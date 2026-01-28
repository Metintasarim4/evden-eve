'use client';

import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Ahmet Yılmaz",
    location: "İstanbul > Ankara",
    comment: "Metin Nakliyat ekibine çok teşekkürler. Özellikle mobilyaların paketlenmesi çok profesyoneldi. Hiçbir çizik olmadan taşındık.",
    stars: 5
  },
  {
    name: "Ayşe Demir",
    location: "Kadıköy > Başakşehir",
    comment: "Asansörlü taşıma hizmeti aldık, 10. kattan eşyaları 2 saatte indirdiler. Ekip çok saygılı ve çalışkandı.",
    stars: 5
  },
  {
    name: "Mehmet Öztürk",
    location: "Ofis Taşıma",
    comment: "Şirketimizin ofisini taşıdılar. Dosyalarımız karışmadı, bilgisayarlarımız özenle paketlendi. Kurumsal hizmet arayanlara tavsiye ederim.",
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Mutlu Müşteriler</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Müşterilerimiz Ne Diyor?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-3xl relative hover:shadow-xl transition duration-300">
              <Quote className="absolute top-6 right-6 text-orange-200 w-10 h-10" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{review.comment}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{review.name}</h4>
                <span className="text-xs text-orange-600 font-bold uppercase">{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}