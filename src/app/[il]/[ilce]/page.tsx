import { Metadata } from "next";
import { notFound } from "next/navigation";

const ILLER = ["istanbul", "ankara", "izmir", "bursa", "antalya", "adana", "konya", "gaziantep", "kayseri", "mersin"];
const ILCE = ["merkez", "kadikoy", "cankaya", "osmangazi", "yildirim", "kucukcekmece", "bagcilar", "bornova", "karsiyaka"];

export async function generateMetadata({ params }: { params: { il: string; ilce: string } }): Promise<Metadata> {
  const { il, ilce } = params;
  const ilAd = il.charAt(0).toUpperCase() + il.slice(1);
  const ilceAd = ilce.charAt(0).toUpperCase() + ilce.slice(1);
  return {
    title: `${ilceAd} Nakliyat Firmaları - En Uygun ${ilAd} Taşıma Fiyatları | Metin Nakliyat`,
    description: `${ilceAd} Evden Eve Nakliyat ve Taşımacılık Fiyatları, ${ilAd} bölgesinde en uygun fiyatlarla Metin Nakliyat'ta! Sigortalı, asansörlü ve güvenli taşımacılık.`
  };
}

function getSchema(il: string, ilce: string) {
  const ilAd = il.charAt(0).toUpperCase() + il.slice(1);
  const ilceAd = ilce.charAt(0).toUpperCase() + ilce.slice(1);
  return {
    "@context": "https://schema.org",
    "@type": ["MovingCompany", "LocalBusiness"],
    "name": `Metin Nakliyat - ${ilceAd} / ${ilAd}`,
    "address": {
      "addressLocality": ilceAd,
      "addressRegion": ilAd,
      "addressCountry": "TR"
    },
    "telephone": "+90 555 555 55 55",
    "url": `https://metin-nakliyat.com/${il}/${ilce}`,
    "priceRange": "₺₺₺",
    "image": "https://metin-nakliyat.com/logo.png",
    "description": `${ilceAd} Evden Eve Nakliyat ve Taşımacılık Fiyatları, ${ilAd} bölgesinde en uygun fiyatlarla Metin Nakliyat'ta! Sigortalı, asansörlü ve güvenli taşımacılık.`
  };
}

export default function IlcePage({ params }: { params: { il: string; ilce: string } }) {
  const { il, ilce } = params;
  if (!ILLER.includes(il) || !ILCE.includes(ilce)) return notFound();
  const ilAd = il.charAt(0).toUpperCase() + il.slice(1);
  const ilceAd = ilce.charAt(0).toUpperCase() + ilce.slice(1);
  const schema = getSchema(il, ilce);

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{ilceAd} Evden Eve Nakliyat ve Taşımacılık Fiyatları</h1>
      <p className="mb-6">{ilceAd} bölgesinde sigortalı, asansörlü ve güvenli taşımacılık hizmeti. En uygun fiyatlarla Metin Nakliyat'ta!</p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Buraya ilçe özelinde içerik, fiyat hesaplama modülü, müşteri yorumları vs. eklenebilir */}
    </div>
  );
}
