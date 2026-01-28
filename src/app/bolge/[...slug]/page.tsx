import { locations } from "@/data/locations";
import Link from "next/link";
import QuoteWizard from "@/components/QuoteWizard"; 
import HowItWorks from "@/components/HowItWorks"; // Modül eklendi
import Testimonials from "@/components/Testimonials"; // Modül eklendi
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";

export default function BolgeSayfasi({ params }: { params: { slug: string[] } }) {
  // URL'den gelen veriyi parçalıyoruz (örn: istanbul, kadikoy, fenerbahce)
  const [cityKey, districtKey, neighborhoodKey] = params.slug;

  const city = locations[cityKey as keyof typeof locations];
  // Eğer şehir tanımlıysa ilçeyi bulmaya çalış, yoksa null olsun
  const district = city?.districts ? city.districts[districtKey as keyof typeof city.districts] : null;
  
  // HATA KONTROLÜ: Eğer şehir veritabanında yoksa
  if (!city) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Bölge Bulunamadı</h1>
            <Link href="/" className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold">Ana Sayfaya Dön</Link>
        </div>
    );
  }

  // --- İÇERİK VE BAŞLIKLARI AYARLA ---
  let pageTitle = "";
  let description = "";
  let subListTitle = "";
  let subLocations: { title: string, slug: string }[] = [];

  // DURUM 1: Sadece Şehir Seçilmiş (örn: /bolge/istanbul)
  if (city && !district) {
    pageTitle = `${city.title} Evden Eve Nakliyat`;
    description = `Metin Nakliyat olarak ${city.title} genelinde ve tüm ilçelerinde sigortalı, asansörlü taşıma hizmeti veriyoruz.`;
    subListTitle = `${city.title} Hizmet Bölgelerimiz`;
    
    if(city.districts) {
        subLocations = Object.keys(city.districts).map(key => ({ 
            title: city.districts[key as keyof typeof city.districts].title, 
            slug: key 
        }));
    }
  } 
  // DURUM 2: İlçe Seçilmiş (örn: /bolge/istanbul/kadikoy)
  else if (district && !neighborhoodKey) {
    pageTitle = `${district.title} Evden Eve Nakliyat - ${city.title}`;
    description = `${district.title} bölgesinin en çok tercih edilen nakliyat firması. ${city.title} ${district.title} içi ve şehirler arası taşımacılık.`;
    subListTitle = `${district.title} Mahalleleri`;
    
    subLocations = district.neighborhoods.map(n => ({ 
      title: n, 
      slug: `${districtKey}/${slugify(n)}` 
    }));
  }
  // DURUM 3: Mahalle Seçilmiş (örn: /bolge/istanbul/kadikoy/fenerbahce)
  else {
    const mahalleAdi = decodeURIComponent(neighborhoodKey).replace(/-/g, " ").toUpperCase();
    pageTitle = `${mahalleAdi} Evden Eve Nakliyat - ${district?.title}`;
    description = `${district?.title} ${mahalleAdi} mahallesinde profesyonel ev taşıma hizmetleri. Asansörlü sistemimizle eşyalarınız güvende.`;
    subListTitle = "Diğer Hizmet Mahalleleri";
    
    // Aynı ilçedeki diğer mahalleleri önerelim
    subLocations = district?.neighborhoods
        .filter(n => slugify(n) !== neighborhoodKey)
        .map(n => ({
            title: n,
            slug: `../${slugify(n)}` // Bir üst klasöre gitmesi için link ayarı
        })) || [];
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-20 font-sans">
      
      {/* 1. HEADER (SEO Başlığı) */}
      <section className="bg-slate-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-3xl">
                <span className="inline-block bg-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                    METİN NAKLİYAT / {city.title.toUpperCase()}
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 capitalize leading-tight">
                    {pageTitle}
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/10">
                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Sigortalı</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/10">
                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Asansörlü</span>
                    </div>
                </div>
            </div>
        </div>
        {/* Arka plan deseni */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-blue-900/50 to-slate-900 pointer-events-none"></div>
      </section>

      {/* 2. ANA İÇERİK (SOL: YAZI, SAĞ: ROBOT) */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* SOL KOLON: Yazılar ve Linkler */}
        <div className="lg:col-span-2 space-y-8">
            
            {/* SEO Metin Kutusu */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Neden {pageTitle} Hizmeti?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    Metin Nakliyat olarak 20 yılı aşkın süredir <strong>{pageTitle}</strong> alanında kesintisiz hizmet veriyoruz. 
                    Eşyalarınızı kendi eşyamız gibi benimsiyor, ambalajlı ve sigortalı olarak taşıyoruz.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                    Özellikle <strong>{district?.title || city.title}</strong> bölgesindeki dar sokaklar veya yüksek katlı binalar için 
                    modüler asansör sistemlerimiz mevcuttur.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-blue-600 w-5 h-5 shrink-0" />
                        <span className="font-medium text-gray-700">Ücretsiz Ekspertiz</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-blue-600 w-5 h-5 shrink-0" />
                        <span className="font-medium text-gray-700">Sözleşmeli Taşıma</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-blue-600 w-5 h-5 shrink-0" />
                        <span className="font-medium text-gray-700">Marangozlu Ekip</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-blue-600 w-5 h-5 shrink-0" />
                        <span className="font-medium text-gray-700">7/24 Destek</span>
                    </div>
                </div>
            </div>

            {/* İç Linkleme Alanı (SEO İçin Kritik) */}
            <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <MapPin className="text-orange-600" />
                    {subListTitle}
                </h3>
                <div className="flex flex-wrap gap-3">
                    {subLocations.map((loc, index) => (
                        <Link 
                            key={index} 
                            // Link yapısını duruma göre ayarlıyoruz
                            href={neighborhoodKey ? loc.slug : `/bolge/${cityKey}${districtKey ? '/' + districtKey : ''}/${loc.slug}`}
                            className="bg-white px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-900 hover:text-white transition shadow-sm flex items-center gap-2 group"
                        >
                            {loc.title}
                            <ArrowRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>

        {/* SAĞ KOLON: Teklif Robotu (Yapışkan) */}
        <div className="lg:col-span-1">
            <div className="sticky top-24 z-30">
                <div className="bg-blue-900 text-white p-4 rounded-t-2xl text-center font-bold text-lg shadow-lg">
                    Hemen Fiyat Hesapla 🚀
                </div>
                {/* Robotun üst köşelerini düzeltmek için -mt-1 kullanıyoruz */}
                <div className="-mt-1">
                    <QuoteWizard />
                </div>
                
                {/* Robot Altı Bilgi */}
                <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl mt-4 text-center">
                    <p className="text-orange-800 text-sm font-bold">📞 0543 210 70 58</p>
                    <p className="text-orange-600 text-xs">Bize 7/24 ulaşabilirsiniz</p>
                </div>
            </div>
        </div>

      </div>

      {/* 3. EK MODÜLLER (Tam Genişlik) */}
      
      {/* Nasıl Çalışıyoruz? */}
      <HowItWorks />

      {/* Müşteri Yorumları */}
      <Testimonials />

    </main>
  );
}

// URL Temizleme Fonksiyonu
function slugify(text: string) {
    return text
        .toString()
        .toLowerCase()
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ı/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c')
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}