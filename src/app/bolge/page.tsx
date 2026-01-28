import Link from "next/link";
import { locations } from "@/data/locations";
import { MapPin, ArrowRight } from "lucide-react";

export default function BolgeIndex() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Hizmet Ağı</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">Hizmet Bölgelerimiz</h1>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Türkiye'nin dört bir yanına uzanan geniş hizmet ağımızla, eşyalarınızı güvenle taşıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(locations).map(([key, city]: any) => (
            <Link key={key} href={`/bolge/${key}`} className="group block">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-900 transition duration-300">
                    <MapPin className="w-6 h-6 text-blue-900 group-hover:text-white transition duration-300" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-orange-500 transform group-hover:translate-x-2 transition duration-300" />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-900 transition">{city.title} Nakliyat</h2>
                <p className="text-gray-500 text-sm mb-4">
                   {city.title} merkez ve tüm ilçelerinde asansörlü, sigortalı taşıma hizmeti.
                </p>
                
                {/* İlçelerden Örnekler */}
                <div className="flex flex-wrap gap-2">
                   {city.districts && Object.values(city.districts).slice(0, 3).map((dist: any, i: number) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md group-hover:bg-orange-50 group-hover:text-orange-700 transition">
                        {dist.title}
                      </span>
                   ))}
                   {city.districts && Object.keys(city.districts).length > 3 && (
                      <span className="text-xs text-gray-400 px-2 py-1">+Devamı</span>
                   )}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}