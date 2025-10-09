import { Globe, Palette, Smartphone, Wrench, Zap } from 'lucide-react';
import React, { useState } from 'react';

function HomeService() {
  const [activeService, setActiveService] = useState(0);
const services = [
  {
    id: 1,
    title: 'Veb Saytların Hazırlanması',
    description:
      'Biznesiniz üçün sürətli, SEO-dostu və responsiv veb saytlar qururuq: korporativ sayt, landing page, e-commerce və xüsusi həllər.',
     icon: <Globe className="w-8 h-8" />,
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    id: 2,
    title: 'Mobil Tətbiq İnkişafı',
    description:
      'iOS və Android üçün performanslı, miqyaslana bilən mobil tətbiqlər: native və ya cross-platform yanaşma ilə.',
      icon: <Smartphone className="w-8 h-8" />,
    image:
      'https://buildfire.com/wp-content/uploads/2024/09/become-mobile-app-developer-1.jpg',
    gradient: 'from-indigo-600 to-purple-600',
  },
  {
    id: 3,
    title: 'Texniki Dəstək',
    description:
      '24/7 monitorinq, server idarəetməsi, təhlükəsizlik, backup və SLA əsaslı operativ yardım — sistemləriniz daima işlək qalsın.',
    icon: <Wrench className="w-8 h-8" />,
    image:
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2072',
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    id: 4,
    title: 'Qrafik Dizayn',
    description:
      'Brendinq, loqo, sosial media vizualları, banner və çap materialları — vahid, peşəkar vizual üslubla.',
    icon: <Palette className="w-8 h-8" />,
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2036',
    gradient: 'from-pink-600 to-rose-600',
  },
  {
    id: 5,
    title: 'Hazır Həllər',
    description:
      'Sürətli start üçün hazır paketlər: korporativ sayt şablonları, rezervasiya sistemləri, email marketinq həlləri, menyu idarəetmə sistemləri, CRM inteqrasiyası',
     icon: <Zap className="w-8 h-8" />,
    image:
      'https://www.radicalstart.com/blog/content/images/size/w1075h650/2023/10/Readymade-Solution.jpg',
    gradient: 'from-orange-600 to-red-600',
  },
];



  return (
    <section className="bg-[#fff] text-black  px-4 py-20 xl:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <span className="text-[#1a1a3d]">✦</span>
              <span>Xidmətlərimiz</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
             İnnovativ  <span className="text-[#1a1a3d]">Xidmətlərimiz</span>
            </h2>
          </div>
          <button className="hidden lg:flex items-center gap-2 bg-[#1a1a3d] text-white font-semibold px-6 py-3 rounded-xl hover:bg-transparent hover:border border-[#1a1a3d] hover:text-black transition-all duration-300">
            Bütün Xidmətlərə Bax
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Service List */}
        <div className="space-y-4">
  {services.map((service, index) => (
    <button
      key={service.id}
      onClick={() => setActiveService(index)}
      className={`w-full text-left p-6 rounded-3xl transition-all duration-300 group ${
        activeService === index
          ? 'bg-[#1a1a3d] text-white'
          : 'bg-[#252525] text-white hover:bg-[#1a1a3d] hover:text-white'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span
            className={`text-2xl font-bold ${
              activeService === index ? 'text-white' : 'text-gray-300'
            }`}
          >
            0{service.id}
          </span>
          <span className="text-xl font-semibold">{service.title}</span>
        </div>
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            activeService === index
              ? 'bg-[#1a1a3d] text-white rotate-45'
              : 'bg-black text-white group-hover:bg-white group-hover:text-black group-hover:rotate-45'
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </div>
    </button>
  ))}
</div>


          {/* Right Side - Service Details */}
<div className="relative rounded-3xl overflow-hidden min-h-[620px] bg-[#121212]">
  {/* BG image */}
  <img
    src={services[activeService].image}
    alt={services[activeService].title}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Yüngül qaralma ki, oxunsun */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Glass Card (şəkildəki panel) */}
  <div className="absolute left-6 sm:left-10 bottom-6 sm:bottom-10
                  w-[calc(100%-3rem)] sm:w-[85%] md:w-[70%]
                  rounded-[28px] p-6 sm:p-8
                  bg-white/6 backdrop-blur-2xl
                  ring-1 ring-white/10 shadow-2xl">

    {/* İç radial blur və rəng ləkəsi (şəkildəki “bokeh” effekti) */}
    <div className="pointer-events-none absolute inset-0 rounded-[28px] overflow-hidden">
      <div className="absolute -top-10 right-12 w-48 h-48 rounded-full
                      bg-[radial-gradient(circle_at_center,rgba(120,120,255,0.35),transparent_60%)]
                      blur-2xl"></div>
      <div className="absolute bottom-0 left-16 w-40 h-40 rounded-full
                      bg-[radial-gradient(circle_at_center,rgba(0,180,255,0.25),transparent_60%)]
                      blur-2xl"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/10"></div>
    </div>

    {/* Content */}
    <div className="relative z-10">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#1a1a3d] rounded-2xl
                      flex items-center justify-center text-2xl sm:text-3xl mb-5 shadow-lg">
       <span className='text-white'> {services[activeService].icon}</span>
      </div>

      <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-2">
        {services[activeService].title}
      </h3>

      <p className="text-slate-200/85 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
        {services[activeService].description}
      </p>

      <button className="inline-flex items-center gap-2 text-[#fff] font-semibold
                         hover:gap-3 transition-all duration-300 group">
        Read More
        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1"
             fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </button>
    </div>
  </div>
</div>

        </div>

        {/* Mobile View All Button */}
        <button className="lg:hidden w-full mt-8 flex items-center justify-center gap-2 bg-[#d4ff00] text-black font-semibold px-6 py-4 rounded-xl hover:bg-[#c4ef00] transition-all duration-300">
          View All Services
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default HomeService;