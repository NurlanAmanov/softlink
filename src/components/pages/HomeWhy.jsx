import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Zap, Headphones, Award } from 'lucide-react';

function HomeWhy() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Header animasiyası
    setTimeout(() => setHeaderVisible(true), 100);

    // Scroll observer for cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target);
            if (index !== -1 && !visibleCards.includes(index)) {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: CheckCircle,
      title: 'Yüksək Keyfiyyət',
      description: 'Müasir texnologiyalar və qabaqcıl metodlarla təmin etdiyimiz xidmətlərimiz hər zaman yüksək keyfiyyətə sahibdir.',
    },
    {
      icon: Zap,
      title: 'Sürətli və Effektiv',
      description: 'Biznes ehtiyaclarınıza uyğun sürətli və effektiv həllər təklif edirik. Hər addımda müştəri məmnuniyyətini təmin etmək üçün çalışırıq.',
    },
    {
      icon: Headphones,
      title: 'Texniki Dəstək',
      description: '24/7 texniki dəstək ilə sizə daim xidmət göstəririk. Problemlərinizi sürətlə həll edirik, beləliklə siz heç vaxt tək qalmırsınız.',
    },
    {
      icon: Award,
      title: 'Təcrübə və Bilik',
      description: '3 ildən çox təcrübəmiz və fərqli sahələrdəki biliklərimizlə sizə ən yaxşı həlləri təqdim edirik.',
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-8 lg:px-16 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#d4ff00] opacity-5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1a1a3d] opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header Section with Fade In */}
        <div 
          className={`transition-all duration-700 transform ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Badge */}
          <div className="mb-6 inline-block">
            <span className="text-[#d4ff00] text-sm font-semibold uppercase tracking-wider bg-[#1a1a3d] px-4 py-2 rounded-full inline-block transform transition-all duration-500 hover:scale-105">
              Üstünlüklərimiz
            </span>
          </div>
          
          {/* Title */}
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a3d] mb-6 transition-all duration-700"
            style={{ transitionDelay: '100ms' }}
          >
            Niyə Biz?  
          </h2>
          
          {/* Description */}
          <p 
            className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto transition-all duration-700"
            style={{ transitionDelay: '200ms' }}
          >
            Bizimlə işləmək sizə yüksək keyfiyyətli xidmətlər və texnoloji həllər təqdim edəcək. 
            SoftLink olaraq, sizin biznesinizi rəqəmsal dünyada irəlilətmək üçün təcrübəmizdən istifadə edirik.
          </p>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                ref={(el) => cardsRef.current[index] = el}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group p-8 bg-white shadow-lg rounded-2xl border border-gray-100 transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Icon Container */}
                <div
                  className={`flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#1a1a3d] to-[#2a2a4d] rounded-2xl transform transition-all duration-500 ${
                    isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                  }`}
                >
                  <Icon className={`w-8 h-8 text-[#d4ff00] transition-all duration-500 ${
                    isHovered ? 'scale-110' : 'scale-100'
                  }`} />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-semibold mb-4 transition-all duration-500 ${
                  isHovered ? 'text-[#d4ff00]' : 'text-[#1a1a3d]'
                }`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Accent Line */}
                <div
                  className={`mt-6 h-1 bg-[#d4ff00] rounded-full transform origin-left transition-all duration-500 ${
                    isHovered ? 'scale-x-100' : 'scale-x-0'
                  }`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <button
          className={`mt-4 px-10 py-4 bg-[#1a1a3d] text-white font-semibold rounded-xl transform transition-all duration-700 hover:bg-[#d4ff00] hover:text-[#1a1a3d] hover:scale-105 shadow-lg hover:shadow-xl ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          Bizimlə Əlaqə Saxlayın
        </button>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}

export default HomeWhy;