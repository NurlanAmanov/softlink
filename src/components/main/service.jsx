import React, { useState } from 'react';

function Service() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: "🌐",
      title: "Veb Saytların Hazırlanması",
      description: "Brendinə uyğun, müasir və mobil-dost veb saytlar yaradırıq. Korporativ, portfolio, e-commerce və landing səhifələr.",
      color: "from-blue-500/10 to-blue-600/20",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      icon: "🖥️",
      title: "Domen və Hosting",
      description: "Etibarlı hosting və sürətli domen xidmətləri ilə saytının 24/7 işləməsinə zəmanət veririk.",
      color: "from-purple-500/10 to-purple-600/20",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      id: 3,
      icon: "🎨",
      title: "Dizayn (UI/UX)",
      description: "İstifadəçi yönümlü interfeyslər və yaradıcı dizayn həlləri. Rahat naviqasiya və yüksək dönüşüm üçün optimallaşdırılmış dizayn.",
      color: "from-pink-500/10 to-pink-600/20",
      borderColor: "border-pink-200",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600"
    },
    {
      id: 4,
      icon: "⚙️",
      title: "Veb Həllər",
      description: "CRM, ERP, onlayn mağaza və biznes proseslərinə uyğun xüsusi proqram həlləri təqdim edirik.",
      color: "from-orange-500/10 to-orange-600/20",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      id: 5,
      icon: "💻",
      title: "İT Həllər",
      description: "Şəbəkə, təhlükəsizlik, server və bulud infrastrukturunun qurulması. Biznesiniz üçün sabit və təhlükəsiz İT mühit.",
      color: "from-green-500/10 to-green-600/20",
      borderColor: "border-green-200",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      id: 6,
      icon: "🔧",
      title: "Texniki Dəstək",
      description: "Sayt və sistemlərin daim işlək qalması üçün 24/7 dəstək və texniki xidmət.",
      color: "from-red-500/10 to-red-600/20",
      borderColor: "border-red-200",
      iconBg: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      id: 7,
      icon: "📈",
      title: "SEO və Rəqəmsal Marketinq",
      description: "Axtarış sistemlərində görünürlüyü artırırıq, müştəri axınını və satışları yüksəldirik.",
      color: "from-indigo-500/10 to-indigo-600/20",
      borderColor: "border-indigo-200",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
    {
      id: 8,
      icon: "🛒",
      title: "E-commerce Həlləri",
      description: "Ödəniş və kuryer inteqrasiyaları ilə miqyaslana bilən onlayn mağazalar qururuq.",
      color: "from-teal-500/10 to-teal-600/20",
      borderColor: "border-teal-200",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ color: '#16163a' }}>
      {/* Hero Section */}
      <div className="bg-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full" style={{ background: 'linear-gradient(135deg, #16163a 0%, #2a2d5a 100%)' }}></div>
          <div className="absolute top-20 -left-20 w-96 h-96 rounded-full opacity-30" style={{ background: 'linear-gradient(135deg, #16163a 0%, #4a4d6a 100%)' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium" style={{ backgroundColor: '#16163a', color: 'white' }}>
              <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
              XİDMƏTLƏRİMİZ
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{ color: '#16163a' }}>
            Rəqəmsal Həlləriniz
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bir Yerdə
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Biznesinizin rəqəmsal transformasiyası üçün lazım olan bütün xidmətləri təqdim edirik. 
            <span className="font-semibold" style={{ color: '#16163a' }}> Softlink</span> — biznesiniz üçün etibarlı rəqəmsal tərəfdaş.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`group relative bg-white rounded-2xl p-6 border transition-all duration-500 hover:shadow-xl hover:scale-[1.02] cursor-pointer ${service.borderColor}`}
                style={{ 
                  background: hoveredCard === service.id 
                    ? `linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.1))`
                    : 'white'
                }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5 overflow-hidden rounded-tr-2xl">
                  <div className={`w-full h-full bg-gradient-to-br ${service.color}`}></div>
                </div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 text-xl transition-transform duration-300 group-hover:scale-110 ${service.iconBg}`}>
                  {service.icon}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-3 transition-colors duration-300 leading-tight" style={{ color: '#16163a' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
                
                {/* Hover Arrow */}
                <div className="flex items-center mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs font-semibold mr-2" style={{ color: '#16163a' }}>
                    Ətraflı
                  </span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" style={{ color: '#16163a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    

    </div>
  );
}

export default Service;