import Link from "next/link";
import { Home, Building2, Factory, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

export default function Hizmetler() {
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
            <Link href="/hizmetler" className="text-blue-900 font-bold transition">Hizmetler</Link>
            <Link href="/iletisim" className="text-gray-600 hover:text-blue-900 font-medium transition">İletişim</Link>
          </nav>
          <Link href="/iletisim" className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-700 transition">
            Teklif Al
          </Link>
        </div>
      </header>

      {/* HİZMETLER BAŞLIK (HERO) */}
      <section className="bg-slate-900 text-white pt-32 pb-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
            <span className="inline-block bg-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                Profesyonel Çözümler
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Hizmetlerimiz</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Evinizi, ofisinizi veya fabrikanızı taşırken ihtiyacınız olan tüm lojistik çözümler tek adreste.
                Güvenli, sigortalı ve zamanında teslimat.
            </p>
        </div>
        {/* Arka plan süsü */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1586864387967-d021593b3b70?auto=format&fit=crop&q=80')] bg-cover opacity-10"></div>
      </section>

      {/* HİZMET KARTLARI LİSTESİ */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. EV TAŞIMACILIĞI */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300 group">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-900 transition duration-300">
              <Home className="w-8 h-8 text-blue-900 group-hover:text-white transition duration-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Evden Eve Nakliyat</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Eşyalarınızın manevi değerinin farkındayız. Mobilyalarınızın demontajından, hassas eşyalarınızın paketlenmesine kadar tüm süreci titizlikle yönetiyoruz.
            </p>
            <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-5 h-5 text-orange-500" /> Özel Ambalajlama Sistemi</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-5 h-5 text-orange-500" /> Mobilya Montaj & Demontaj</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-5 h-5 text-orange-500" /> Asansörlü Taşıma İmkanı</li>
            </ul>
            <Link href="/iletisim" className="inline-flex items-center text-blue-900 font-bold hover:text-orange-600 transition">
                Fiyat Teklifi Al <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* 2. OFİS TAŞIMACILIĞI */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300 group">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition duration-300">
              <Briefcase className="w-8 h-8 text-orange-600 group-hover:text-white transition duration-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ofis ve Büro Taşımacılığı</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              İş akışınızın aksamaması için hızlı ve planlı hareket ediyoruz. Dosyalarınızın karışmaması için özel arşivleme sistemi ve bilgisayarlarınız için koruyucu ambalajlar kullanıyoruz.
            </p>
            <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-5 h-5 text-blue-900" /> Hızlı ve Planlı Operasyon</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-5 h-5 text-blue-900" /> Arşiv ve Dosya Düzeni</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-5 h-5 text-blue-900" /> Elektronik Cihaz Koruması</li>
            </ul>
            <Link href="/iletisim" className="inline-flex items-center text-blue-900 font-bold hover:text-orange-600 transition">
                Fiyat Teklifi Al <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* 3. İŞ YERİ / FABRİKA */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300 group">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-700 transition duration-300">
              <Factory className="w-8 h-8 text-green-700 group-hover:text-white transition duration-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fabrika ve Ağır Yük Taşıma</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Ağır sanayi makineleri, üretim bantları ve hassas endüstriyel cihazlar için özel ekipmanlarımız ve vinç sistemlerimizle hizmetinizdeyiz.
            </p>
            <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-5 h-5 text-orange-500" /> Ağır Yük Ekipmanları</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-5 h-5 text-orange-500" /> Forklift ve Vinç Desteği</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-5 h-5 text-orange-500" /> İş Güvenliği Standartları</li>
            </ul>
            <Link href="/iletisim" className="inline-flex items-center text-blue-900 font-bold hover:text-orange-600 transition">
                Keşif Talep Et <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* 4. KURUMSAL TAŞIMACILIK */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300 group">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-800 transition duration-300">
              <Building2 className="w-8 h-8 text-purple-800 group-hover:text-white transition duration-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kurumsal Taşımacılık</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Banka, hastane, okul, dershane gibi kurumsal yapıların taşınmasında sözleşmeli ve sigortalı çözüm ortağınızız. İhale ve şartnamelere uygun hizmet.
            </p>
            <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-5 h-5 text-blue-900" /> Resmi Sözleşmeli Hizmet</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-5 h-5 text-blue-900" /> Tam Kapsamlı Sigorta</li>
                <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-5 h-5 text-blue-900" /> Kurumsal Faturalama</li>
            </ul>
            <Link href="/iletisim" className="inline-flex items-center text-blue-900 font-bold hover:text-orange-600 transition">
                Teklif İste <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

        </div>
      </section>

      {/* ALT CTA (Eylem Çağrısı) */}
      <section className="bg-blue-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Taşınma Planınız Hazır mı?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Hangi hizmete ihtiyacınız olursa olsun, Metin Nakliyat güvencesiyle en iyi fiyatı alın.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link href="/iletisim" className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-700 transition shadow-lg">
                    Hemen Fiyat Al
                </Link>
                <a href="tel:05432107058" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
                    Bizi Arayın
                </a>
            </div>
        </div>
      </section>

    </main>
  );
}