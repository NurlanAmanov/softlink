import React, { useState, useEffect } from 'react';

// Slayder məlumatları
const slides = [
  {
    id: 1,
    title: "Veb Sayt İnkişafı",
    subtitle: "Rəqəmsal Dünyada Fərqlilik Yaradın",
    description: "Biznesiniz üçün fərdi, performanslı və təhlükəsiz veb həllər təqdim edirik. Kreativ dizayn və müasir texnologiyaların sintezi ilə unikal layihələr yaradırıq.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Mobil Tətbiq Dizaynı",
    subtitle: "Yeni Nəsil Mobil Təcrübələr",
    description: "İstifadəçi dostu interfeys və yüksək funksionallıq təmin edən mobil tətbiqlər. iOS və Android platformalarında möhtəşəm tətbiqlərlə müştəri bazanızı genişləndirin.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Bulud və Server Xidmətləri",
    subtitle: "Onlayn Varlığınızın Sabit Təməli",
    description: "Etibarlı və sürətli bulud hosting, server xidmətləri və verilənlər bazası həlləri. 24/7 texniki dəstək ilə biznesinizin fasiləsiz işləməsinə zəmanət veririk.",
    image: "https://images.unsplash.com/photo-1581092918367-5c2a5b1f27c9?q=80&w=2070&auto=format&fit=crop",
  },
];

const AnimatedSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // 8 saniyəlik avtomatik keçid
    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden font-sans text-white">
      {/* Arxa fon şəkli (Ken Burns Effekti) */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-125'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-[10000ms] ease-in-out"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-70" />

      {/* Əsas məzmun bloku */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="overflow-hidden mb-4">
            <h2 className={`text-xl sm:text-2xl text-cyan-400 font-light tracking-wide transition-transform duration-700 ease-out ${
              currentSlideData.id !== null ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              {currentSlideData.subtitle}
            </h2>
          </div>
          <div className="overflow-hidden">
            <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight transition-transform duration-700 delay-100 ease-out ${
              currentSlideData.id !== null ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              {currentSlideData.title}
            </h1>
          </div>
          <div className="overflow-hidden mt-6">
            <p className={`text-base sm:text-lg text-gray-300 max-w-2xl mx-auto transition-transform duration-700 delay-200 ease-out ${
              currentSlideData.id !== null ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}>
              {currentSlideData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Aşağı naviqasiya paneli */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 border border-white border-opacity-20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-150' : 'bg-gray-500 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 border border-white border-opacity-20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedSlider;