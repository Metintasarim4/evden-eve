// Türkiye'nin 81 ili, ilçeleri ve mahalleleri için örnek veri yapısı
export const locations = [
  {
    il: "istanbul",
    ad: "İstanbul",
    ilceler: [
      {
        ilce: "kadikoy",
        ad: "Kadıköy",
        mahalleler: ["Moda", "Fenerbahçe", "Göztepe", "Acıbadem"]
      },
      {
        ilce: "besiktas",
        ad: "Beşiktaş",
        mahalleler: ["Levent", "Ortaköy", "Etiler", "Arnavutköy"]
      }
    ]
  },
  {
    il: "ankara",
    ad: "Ankara",
    ilceler: [
      {
        ilce: "cankaya",
        ad: "Çankaya",
        mahalleler: ["Kavaklıdere", "Bahçelievler", "Ayrancı", "Yıldız"]
      },
      {
        ilce: "yenimahalle",
        ad: "Yenimahalle",
        mahalleler: ["Demetevler", "Batıkent", "Şentepe", "Ostim"]
      }
    ]
  }
  // ... diğer iller ve ilçeler
];
