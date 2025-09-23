import React, { useState, useEffect } from 'react';

// Slayder məlumatları
const slides = [
  {
    id: 1,
    title: "Veb Sayt İnkişafı",
    subtitle: "Rəqəmsal Dünyada Fərqlilik Yaradın",
    description: "Biznesiniz üçün fərdi, performanslı və təhlükəsiz veb həllər təqdim edirik. Kreativ dizayn və müasir texnologiyaların sintezi ilə unikal layihələr yaradırıq.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop",
    accent: "from-gray-800/30 to-gray-900/30",
    textColor: "text-gray-300"
  },
  {
    id: 2,
    title: "Mobil Tətbiq Dizaynı",
    subtitle: "Yeni Nəsil Mobil Təcrübələr",
    description: "İstifadəçi dostu interfeys və yüksək funksionallıq təmin edən mobil tətbiqlər. iOS və Android platformalarında möhtəşəm tətbiqlərlə müştəri bazanızı genişləndirin.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    accent: "from-gray-700/30 to-gray-800/30",
    textColor: "text-gray-300"
  },
  {
    id: 3,
    title: "Bulud və Server Xidmətləri",
    subtitle: "Onlayn Varlığınızın Sabit Təməli",
    description: "Etibarlı və sürətli bulud hosting, server xidmətləri və verilənlər bazası həlləri. 24/7 texniki dəstək ilə biznesinizin fasiləsiz işləməsinə zəmanət veririk.",
    image: "https://images.unsplash.com/photo-1581092918367-5c2a5b1f27c9?q=80&w=2070&auto=format&fit=crop",
    accent: "from-gray-600/30 to-gray-700/30",
    textColor: "text-gray-300"
  },
];

const AnimatedSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const goToSlide = (index) => {
    if (index === currentSlide || isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden font-sans">
      {/* Background Images with Ken Burns Effect */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`w-full h-full bg-cover bg-center transition-transform duration-[12000ms] ease-linear ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
            style={{ 
              backgroundImage: `url(${slide.image})`,
            }}
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70`} />
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.accent}`} />
        </div>
      ))}

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/15 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white">
              <div className="mb-6">
                <div className="overflow-hidden">
                  <span className={`inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-sm font-medium tracking-wide transition-all duration-700 ${
                    !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  } text-gray-300`}>
                    {currentSlideData.subtitle}
                  </span>
                </div>
              </div>
              
              <div className="overflow-hidden">
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 transition-all duration-700 delay-100 ${
                  !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}>
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {currentSlideData.title}
                  </span>
                </h1>
              </div>
              
              <div className="overflow-hidden">
                <p className={`text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${
                  !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}>
                  {currentSlideData.description}
                </p>
              </div>

              {/* CTA Button */}
              <div className="overflow-hidden mt-10">
                <button className={`group relative px-8 py-4 bg-gradient-to-r from-white/8 to-white/4 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:from-white/15 hover:to-white/8 transition-all duration-500 ${
                  !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '300ms' }}>
                  <span className="relative z-10">Ətraflı Məlumat</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <svg className="inline-block ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${currentSlideData.accent} animate-pulse`} />
                <div className="absolute inset-4 rounded-full bg-black/20 backdrop-blur-sm border border-white/10" />
                <div className="absolute inset-8 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${currentSlideData.accent} animate-spin-slow opacity-60`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-20">
        <div 
          className={`h-full bg-gradient-to-r from-white to-gray-400 transition-all duration-100`}
          style={{
            width: isAutoPlay ? `${((Date.now() % 6000) / 6000) * 100}%` : '0%'
          }}
        />
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center space-x-6 bg-black/25 backdrop-blur-md rounded-full px-8 py-4 border border-white/10">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="group p-3 rounded-full bg-white/8 hover:bg-white/15 border border-white/15 text-white transition-all duration-300 disabled:opacity-50"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`relative overflow-hidden transition-all duration-500 ${
                  index === currentSlide 
                    ? 'w-12 h-3 bg-white rounded-full' 
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50 rounded-full'
                }`}
              >
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="group p-3 rounded-full bg-white/8 hover:bg-white/15 border border-white/15 text-white transition-all duration-300 disabled:opacity-50"
          >
            <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-20 text-gray-300">
        <div className="bg-black/40 backdrop-blur-md rounded-full px-4 py-2 border border-white/5">
          <span className="text-sm font-medium">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedSlider;