import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-80 bg-white/90 shadow-lg p-6 rounded-xl mb-8 lg:mb-0 lg:sticky lg:top-20 h-fit">
      <h2 className="text-xl font-bold text-blue-700 mb-4">Duyurular</h2>
      <ul className="mb-8 list-disc list-inside text-sm text-gray-700">
        <li>Şubat ayında %10 indirim fırsatı!</li>
        <li>Yeni asansörlü taşıma filomuz hizmette.</li>
      </ul>
      <h2 className="text-xl font-bold text-blue-700 mb-4">Haberler</h2>
      <ul className="list-disc list-inside text-sm text-gray-700">
        <li>2026'da 10.000+ başarılı taşınma!</li>
        <li>Türkiye'nin 81 ilinde hizmet ağımız genişledi.</li>
      </ul>
    </aside>
  );
}
