import { Metadata } from "next";
import { locations } from "@/data/locations";

export async function generateMetadata({ params }: { params: { il: string; ilce: string; mahalle: string } }): Promise<Metadata> {
  const { il, ilce, mahalle } = params;
  const ilObj = locations.find(l => l.il === il);
  const ilceObj = ilObj?.ilceler.find(i => i.ilce === ilce);
  const ilAd = ilObj?.ad || il;
  const ilceAd = ilceObj?.ad || ilce;
  const mahalleAd = mahalle || "";
  const title = `${mahalleAd} ${ilceAd} ${ilAd} Evden Eve Nakliyat Nasıl Yapılır? Nelere Dikkat Edilmeli?`;
  const description = `${mahalleAd} ${ilceAd} ${ilAd} bölgesinde evden eve nakliyat süreci, dikkat edilmesi gerekenler ve profesyonel taşınma ipuçları. Sigortalı, güvenli ve uygun fiyatlı taşımacılık rehberi.`;
  return { title, description };
}

export default function BilgiPage({ params }: { params: { il: string; ilce: string; mahalle: string } }) {
  const { il, ilce, mahalle } = params;
  const ilObj = locations.find(l => l.il === il);
  const ilceObj = ilObj?.ilceler.find(i => i.ilce === ilce);
  const ilAd = ilObj?.ad || il;
  const ilceAd = ilceObj?.ad || ilce;
  const mahalleAd = mahalle || "";
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        {mahalleAd} {ilceAd} {ilAd} Evden Eve Nakliyat Nasıl Yapılır? Nelere Dikkat Edilmeli?
      </h1>
      <article className="prose max-w-none">
        <p>
          {mahalleAd ? `${mahalleAd} mahallesi, ` : ""}
          {ilceAd} {ilAd} bölgesinde evden eve nakliyat süreci, doğru planlama ve güvenilir firma seçimiyle çok daha kolay ve güvenli hale gelir.
        </p>
        <ul>
          <li><b>Planlama:</b> Taşınma tarihini önceden belirleyin ve eşyalarınızı kategorilere ayırın.</li>
          <li><b>Paketleme:</b> Kırılacak eşyalar için ekstra koruma sağlayın, kutuları etiketleyin.</li>
          <li><b>Firma Seçimi:</b> Sigortalı ve referanslı nakliyat firmalarını tercih edin.</li>
          <li><b>Fiyatlandırma:</b> Fiyat teklifi alırken tüm hizmetleri (asansör, sigorta, montaj) dahil ettirin.</li>
          <li><b>Taşıma Günü:</b> Eşyaların eksiksiz taşındığından emin olun, teslim tutanağı isteyin.</li>
        </ul>
        <p>
          Profesyonel nakliyat ile {mahalleAd ? `${mahalleAd} mahallesi, ` : ""}{ilceAd} {ilAd} bölgesinde taşınmak artık çok daha kolay!
        </p>
      </article>
    </main>
  );
}
