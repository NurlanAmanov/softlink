import React, { useState, useEffect } from 'react';
import { CheckCircle, Zap, Headphones, Award } from 'lucide-react';
import { motion } from "framer-motion";
function HomeWhy() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: CheckCircle,
      title: 'Yüksək Keyfiyyət',
      description: 'Müasir texnologiyalar və qabaqcıl metodlarla təmin etdiyimiz xidmətlərimiz hər zaman yüksək keyfiyyətə sahibdir.',
      delay: '0ms'
    },
    {
      icon: Zap,
      title: 'Sürətli və Effektiv',
      description: 'Biznes ehtiyaclarınıza uyğun sürətli və effektiv həllər təklif edirik. Hər addımda müştəri məmnuniyyətini təmin etmək üçün çalışırıq.',
      delay: '100ms'
    },
    {
      icon: Headphones,
      title: 'Texniki Dəstək',
      description: '24/7 texniki dəstək ilə sizə daim xidmət göstəririk. Problemlərinizi sürətlə həll edirik, beləliklə siz heç vaxt tək qalmırsınız.',
      delay: '200ms'
    },
    {
      icon: Award,
      title: 'Təcrübə və Bilik',
      description: '3 ildən çox təcrübəmiz və fərqli sahələrdəki biliklərimizlə sizə ən yaxşı həlləri təqdim edirik.',
      delay: '300ms'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-8 lg:px-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#d4ff00] opacity-5 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1a1a3d] opacity-5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div 
          className={`mb-6 inline-block transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          <span className="text-[#d4ff00] text-sm font-semibold uppercase tracking-wider bg-[#1a1a3d] px-4 py-2 rounded-full">
            Üstünlüklərimiz
          </span>
        </div>
        
        <h2 
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a3d] mb-6 transform transition-all duration-700 delay-100 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          Niyə Biz?  
        </h2>
        
        <p 
          className={`text-lg text-gray-600 mb-16 max-w-3xl mx-auto transform transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          Bizimlə işləmək sizə yüksək keyfiyyətli xidmətlər və texnoloji həllər təqdim edəcək. 
          SoftLink olaraq, sizin biznesinizi rəqəmsal dünyada irəlilətmək üçün təcrübəmizdən istifadə edirik.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;
            return (
              <motion.div 
               initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group p-8 bg-white shadow-lg rounded-2xl border border-gray-100 transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{
                  transitionDelay: feature.delay
                }}
              >
                {/* Icon */}
                <div className={`flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#1a1a3d] to-[#2a2a4d] rounded-2xl transform transition-all duration-500 ${
                  isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                }`}>
                  <Icon className="w-8 h-8 text-[#d4ff00]" />
                </div>
                
                <h3 className={`text-xl font-semibold text-[#1a1a3d] mb-4 transition-colors duration-300 ${
                  isHovered ? 'text-[#d4ff00]' : ''
                }`}>
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Bottom accent line */}
                <div className={`mt-6 h-1 bg-[#d4ff00] rounded-full transform origin-left transition-transform duration-500 ${
                  isHovered ? 'scale-x-100' : 'scale-x-0'
                }`}></div>
              </motion.div>
            );
          })}
        </div>

        <button 
          className={`mt-4 px-10 py-4 bg-[#1a1a3d] text-white font-semibold rounded-xl transform transition-all duration-700 delay-400 hover:bg-[#d4ff00] hover:text-[#1a1a3d] hover:scale-105 shadow-lg hover:shadow-xl ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Bizimlə Əlaqə Saxlayın
        </button>
      </div>
      
      {/* <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style> */}
    </section>
  );
}

export default HomeWhy;