import { Metadata } from "next";
import { notFound } from "next/navigation";


import { locations } from "../../data/locations";
import PriceCalculator from "../../components/PriceCalculator";

export async function generateMetadata({ params }: { params: { il: string; ilce: string; mahalle?: string } }): Promise<Metadata> {
  const { il, ilce, mahalle } = params;
  const ilObj = locations.find(l => l.il === il);
  const ilceObj = ilObj?.ilceler.find(i => i.ilce === ilce);
  const ilAd = ilObj?.ad || il;
  const ilceAd = ilceObj?.ad || ilce;
  const mahalleAd = mahalle ? mahalle : "";
  const title = mahalleAd
    ? `${mahalleAd} ${ilceAd} Nakliyat Firmaları - En Uygun ${ilAd} Taşıma Fiyatları | Metin Nakliyat`
    : `${ilceAd} Nakliyat Firmaları - En Uygun ${ilAd} Taşıma Fiyatları | Metin Nakliyat`;
  const description = mahalleAd
    ? `${mahalleAd} Mahallesi ${ilceAd} Evden Eve Nakliyat ve Taşımacılık Fiyatları, ${ilAd} bölgesinde en uygun fiyatlarla Metin Nakliyat'ta! Sigortalı, asansörlü ve güvenli taşımacılık.`
    : `${ilceAd} Evden Eve Nakliyat ve Taşımacılık Fiyatları, ${ilAd} bölgesinde en uygun fiyatlarla Metin Nakliyat'ta! Sigortalı, asansörlü ve güvenli taşımacılık.`;
  return { title, description };
}

function getSchema(il: string, ilce: string, mahalle?: string) {
  const ilObj = locations.find(l => l.il === il);
  const ilceObj = ilObj?.ilceler.find(i => i.ilce === ilce);
  const ilAd = ilObj?.ad || il;
  const ilceAd = ilceObj?.ad || ilce;
  const mahalleAd = mahalle ? mahalle : "";
  return {
    "@context": "https://schema.org",
    "@type": ["MovingCompany", "LocalBusiness"],
    "name": mahalleAd
      ? `Metin Nakliyat - ${mahalleAd} / ${ilceAd} / ${ilAd}`
      : `Metin Nakliyat - ${ilceAd} / ${ilAd}`,
    "address": {
      "addressLocality": ilceAd,
      "addressRegion": ilAd,
      "streetAddress": mahalleAd,
      "addressCountry": "TR"
    },
    "telephone": "+90 555 555 55 55",
    "url": mahalleAd
      ? `https://metin-nakliyat.com/${il}/${ilce}/${mahalle}`
      : `https://metin-nakliyat.com/${il}/${ilce}`,
    "priceRange": "₺₺₺",
    "image": "https://metin-nakliyat.com/logo.png",
    "description": mahalleAd
      ? `${mahalleAd} Mahallesi ${ilceAd} Evden Eve Nakliyat ve Taşımacılık Fiyatları, ${ilAd} bölgesinde en uygun fiyatlarla Metin Nakliyat'ta! Sigortalı, asansörlü ve güvenli taşımacılık.`
      : `${ilceAd} Evden Eve Nakliyat ve Taşımacılık Fiyatları, ${ilAd} bölgesinde en uygun fiyatlarla Metin Nakliyat'ta! Sigortalı, asansörlü ve güvenli taşımacılık.`
  };
}

export default function IlcePage({ params }: { params: { il: string; ilce: string; mahalle?: string } }) {
  const { il, ilce, mahalle } = params;
  const ilObj = locations.find(l => l.il === il);
  const ilceObj = ilObj?.ilceler.find(i => i.ilce === ilce);
  if (!ilObj || !ilceObj) return notFound();
  const ilAd = ilObj.ad;
  const ilceAd = ilceObj.ad;
  const mahalleAd = mahalle || "";
  const schema = getSchema(il, ilce, mahalleAd);

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        {mahalleAd ? `${mahalleAd} Mahallesi ` : ""}{ilceAd} Evden Eve Nakliyat ve Taşımacılık Fiyatları
      </h1>
      <p className="mb-6">
        {mahalleAd ? `${mahalleAd} Mahallesi, ` : ""}{ilceAd} bölgesinde sigortalı, asansörlü ve güvenli taşımacılık hizmeti. En uygun fiyatlarla Metin Nakliyat'ta!
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Buraya ilçe ve mahalle özelinde içerik, fiyat hesaplama modülü, müşteri yorumları vs. eklenebilir */}
          <div className="my-8">
            <PriceCalculator />
          </div>
          <section className="py-8">
            <h2 className="text-xl font-bold text-blue-700 mb-6 text-center">Müşteri Yorumları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <p className="text-lg italic mb-2">"Taşınma sürecim çok kolay ve güvenli geçti. Eşyalarım sorunsuz taşındı!"</p>
                <div className="text-sm text-gray-600">- Ayşe K., {ilAd}</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <p className="text-lg italic mb-2">"Asansörlü nakliyat sayesinde yüksek katta bile hiç sorun yaşamadım."</p>
                <div className="text-sm text-gray-600">- Mehmet T., {ilAd}</div>
              </div>
            </div>
          </section>
    </div>
  );
}
