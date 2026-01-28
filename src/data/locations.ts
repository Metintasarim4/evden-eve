export const locations = {
  // --- MARMARA BÖLGESİ ---
  "istanbul": {
    title: "İstanbul",
    districts: {
      "kadikoy": { title: "Kadıköy", neighborhoods: ["Fenerbahçe", "Bostancı", "Göztepe", "Suadiye", "Erenköy"] },
      "besiktas": { title: "Beşiktaş", neighborhoods: ["Etiler", "Bebek", "Ortaköy", "Levent"] },
      "basaksehir": { title: "Başakşehir", neighborhoods: ["Kayaşehir", "Bahçeşehir", "İkitelli"] },
      "uskudar": { title: "Üsküdar", neighborhoods: ["Çengelköy", "Beylerbeyi", "Altunizade"] },
      "sisli": { title: "Şişli", neighborhoods: ["Nişantaşı", "Mecidiyeköy", "Bomonti"] }
    }
  },
  "bursa": {
    title: "Bursa",
    districts: {
      "nilufer": { title: "Nilüfer", neighborhoods: ["Özlüce", "Beşevler", "Ertuğrul"] },
      "osmangazi": { title: "Osmangazi", neighborhoods: ["Çekirge", "Heykel", "Altıparmak"] }
    }
  },
  "kocaeli": { title: "Kocaeli", districts: { "izmit": { title: "İzmit", neighborhoods: [] }, "gebze": { title: "Gebze", neighborhoods: [] } } },
  "balikesir": { title: "Balıkesir", districts: { "altieylul": { title: "Altıeylül", neighborhoods: [] }, "bandirma": { title: "Bandırma", neighborhoods: [] } } },
  "tekirdag": { title: "Tekirdağ", districts: { "corlu": { title: "Çorlu", neighborhoods: [] }, "suleymanpasa": { title: "Süleymanpaşa", neighborhoods: [] } } },
  "edirne": { title: "Edirne", districts: {} },
  "kirklareli": { title: "Kırklareli", districts: {} },
  "canakkale": { title: "Çanakkale", districts: {} },
  "sakarya": { title: "Sakarya", districts: { "serdivan": { title: "Serdivan", neighborhoods: [] }, "adapazari": { title: "Adapazarı", neighborhoods: [] } } },
  "yalova": { title: "Yalova", districts: {} },
  "bilecik": { title: "Bilecik", districts: {} },

  // --- İÇ ANADOLU BÖLGESİ ---
  "ankara": {
    title: "Ankara",
    districts: {
      "cankaya": { title: "Çankaya", neighborhoods: ["Kızılay", "Bahçelievler", "Çayyolu", "Ümitköy"] },
      "keceoren": { title: "Keçiören", neighborhoods: ["Etlik", "İncirli", "Aktepe"] },
      "yenimahalle": { title: "Yenimahalle", neighborhoods: ["Batıkent", "Demetevler"] },
      "mamak": { title: "Mamak", neighborhoods: ["Abidinpaşa", "Akdere"] },
      "golbasi": { title: "Gölbaşı", neighborhoods: ["İncek", "Toki"] }
    }
  },
  "konya": { title: "Konya", districts: { "selcuklu": { title: "Selçuklu", neighborhoods: [] }, "meram": { title: "Meram", neighborhoods: [] } } },
  "kayseri": { title: "Kayseri", districts: { "melikgazi": { title: "Melikgazi", neighborhoods: [] }, "kocasinan": { title: "Kocasinan", neighborhoods: [] } } },
  "eskisehir": { title: "Eskişehir", districts: { "odunpazari": { title: "Odunpazarı", neighborhoods: [] }, "tepebasi": { title: "Tepebaşı", neighborhoods: [] } } },
  "sivas": { title: "Sivas", districts: {} },
  "kirikkale": { title: "Kırıkkale", districts: {} },
  "aksaray": { title: "Aksaray", districts: {} },
  "karaman": { title: "Karaman", districts: {} },
  "kirsehir": { title: "Kırşehir", districts: {} },
  "nigde": { title: "Niğde", districts: {} },
  "nevsehir": { title: "Nevşehir", districts: {} },
  "yozgat": { title: "Yozgat", districts: {} },
  "cankiri": { title: "Çankırı", districts: {} },

  // --- EGE BÖLGESİ ---
  "izmir": {
    title: "İzmir",
    districts: {
      "karsiyaka": { title: "Karşıyaka", neighborhoods: ["Bostanlı", "Mavişehir"] },
      "bornova": { title: "Bornova", neighborhoods: ["Özkanlar", "Küçükpark"] },
      "buca": { title: "Buca", neighborhoods: ["Şirinyer", "Tınaztepe"] },
      "konak": { title: "Konak", neighborhoods: ["Alsancak", "Göztepe"] }
    }
  },
  "aydin": { title: "Aydın", districts: { "efeler": { title: "Efeler", neighborhoods: [] }, "kusadasi": { title: "Kuşadası", neighborhoods: [] } } },
  "denizli": { title: "Denizli", districts: { "pamukkale": { title: "Pamukkale", neighborhoods: [] } } },
  "mugla": { title: "Muğla", districts: { "bodrum": { title: "Bodrum", neighborhoods: [] }, "fethiye": { title: "Fethiye", neighborhoods: [] }, "marmaris": { title: "Marmaris", neighborhoods: [] } } },
  "manisa": { title: "Manisa", districts: { "yunusemre": { title: "Yunusemre", neighborhoods: [] } } },
  "afyonkarahisar": { title: "Afyonkarahisar", districts: {} },
  "kutahya": { title: "Kütahya", districts: {} },
  "usak": { title: "Uşak", districts: {} },

  // --- AKDENİZ BÖLGESİ ---
  "antalya": {
    title: "Antalya",
    districts: {
      "muratpasa": { title: "Muratpaşa", neighborhoods: ["Lara", "Fener"] },
      "konyaalti": { title: "Konyaaltı", neighborhoods: ["Liman", "Hurma"] },
      "kepez": { title: "Kepez", neighborhoods: [] },
      "alanya": { title: "Alanya", neighborhoods: [] }
    }
  },
  "adana": { title: "Adana", districts: { "seyhan": { title: "Seyhan", neighborhoods: [] }, "cukurova": { title: "Çukurova", neighborhoods: [] } } },
  "mersin": { title: "Mersin", districts: { "yenisehir": { title: "Yenişehir", neighborhoods: [] }, "mezitli": { title: "Mezitli", neighborhoods: [] } } },
  "hatay": { title: "Hatay", districts: { "antakya": { title: "Antakya", neighborhoods: [] }, "iskenderun": { title: "İskenderun", neighborhoods: [] } } },
  "kahramanmaras": { title: "Kahramanmaraş", districts: { "onikisubat": { title: "Onikişubat", neighborhoods: [] }, "dulkadiroglu": { title: "Dulkadiroğlu", neighborhoods: [] } } },
  "isparta": { title: "Isparta", districts: {} },
  "burdur": { title: "Burdur", districts: {} },
  "osmaniye": { title: "Osmaniye", districts: {} },

  // --- KARADENİZ BÖLGESİ ---
  "samsun": { title: "Samsun", districts: { "ilkadim": { title: "İlkadım", neighborhoods: [] }, "atakum": { title: "Atakum", neighborhoods: [] } } },
  "trabzon": { title: "Trabzon", districts: { "ortahisar": { title: "Ortahisar", neighborhoods: [] }, "akcaabat": { title: "Akçaabat", neighborhoods: [] } } },
  "ordu": { title: "Ordu", districts: { "altinordu": { title: "Altınordu", neighborhoods: [] } } },
  "giresun": { title: "Giresun", districts: {} },
  "rize": { title: "Rize", districts: {} },
  "artvin": { title: "Artvin", districts: {} },
  "gumushane": { title: "Gümüşhane", districts: {} },
  "bayburt": { title: "Bayburt", districts: {} },
  "tokat": { title: "Tokat", districts: {} },
  "amasya": { title: "Amasya", districts: {} },
  "corum": { title: "Çorum", districts: {} },
  "sinop": { title: "Sinop", districts: {} },
  "kastamonu": { title: "Kastamonu", districts: {} },
  "karabuk": { title: "Karabük", districts: {} },
  "zonguldak": { title: "Zonguldak", districts: {} },
  "bartin": { title: "Bartın", districts: {} },
  "bolu": { title: "Bolu", districts: {} },
  "duzce": { title: "Düzce", districts: {} },

  // --- DOĞU ANADOLU BÖLGESİ ---
  "erzurum": { title: "Erzurum", districts: { "yakutiye": { title: "Yakutiye", neighborhoods: [] }, "palandoken": { title: "Palandöken", neighborhoods: [] } } },
  "malatya": { title: "Malatya", districts: { "battalgazi": { title: "Battalgazi", neighborhoods: [] }, "yesilyurt": { title: "Yeşilyurt", neighborhoods: [] } } },
  "van": { title: "Van", districts: { "ipekyolu": { title: "İpekyolu", neighborhoods: [] }, "tusba": { title: "Tuşba", neighborhoods: [] } } },
  "elazig": { title: "Elazığ", districts: {} },
  "erzincan": { title: "Erzincan", districts: {} },
  "kars": { title: "Kars", districts: {} },
  "agri": { title: "Ağrı", districts: {} },
  "igdir": { title: "Iğdır", districts: {} },
  "ardahan": { title: "Ardahan", districts: {} },
  "mus": { title: "Muş", districts: {} },
  "bingol": { title: "Bingöl", districts: {} },
  "bitlis": { title: "Bitlis", districts: {} },
  "hakkari": { title: "Hakkari", districts: {} },
  "tunceli": { title: "Tunceli", districts: {} },

  // --- GÜNEYDOĞU ANADOLU BÖLGESİ ---
  "gaziantep": { title: "Gaziantep", districts: { "sahinbey": { title: "Şahinbey", neighborhoods: [] }, "sehitkamil": { title: "Şehitkamil", neighborhoods: [] } } },
  "diyarbakir": { title: "Diyarbakır", districts: { "baglar": { title: "Bağlar", neighborhoods: [] }, "kayapinar": { title: "Kayapınar", neighborhoods: [] } } },
  "sanliurfa": { title: "Şanlıurfa", districts: { "haliliye": { title: "Haliliye", neighborhoods: [] }, "eyyubiye": { title: "Eyyübiye", neighborhoods: [] } } },
  "mardin": { title: "Mardin", districts: { "artuklu": { title: "Artuklu", neighborhoods: [] } } },
  "batman": { title: "Batman", districts: {} },
  "adiyaman": { title: "Adıyaman", districts: {} },
  "siirt": { title: "Siirt", districts: {} },
  "sirnak": { title: "Şırnak", districts: {} },
  "kilis": { title: "Kilis", districts: {} }
};