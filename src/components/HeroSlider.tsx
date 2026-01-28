'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// YENİ VE SAĞLAM RESİM LİNKLERİ
const sliderImages = [
  {
    // Kamyon ve Taşıma
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
    alt: "Güvenli Nakliye Tırı"
  },
  {
    // Paketleme ve Kutular
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
    alt: "Profesyonel Paketleme"
  },
  {
    // Yeni Ev Anahtarı / Mutlu Başlangıç
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070&auto=format&fit=crop",
    alt: "Yeni Eviniz Sizi Bekliyor"
  },
  {
    // Taşıma Ekibi / İşçilik
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    alt: "Uzman Taşıma Ekibi"
  }
];

export default function HeroSlider() {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper w-full h-full"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover pointer-events-none"
            />
            {/* Resimlerin üzerine okumayı kolaylaştıran koyu filtre */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}