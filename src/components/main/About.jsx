import React, { useState, useEffect } from 'react';

function About() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const steps = [
    {
      id: 1,
      stepNumber: "01",
      title: "Veb Sayt İnkişafı",
      description: "Biznesiniz üçün fərdi, performanslı və təhlükəsiz veb həllər təqdim edirik. Kreativ dizayn və müasir texnologiyaların sintezi.",
      bgColor: "bg-orange-100",
      textColor: "text-[#16163a]",
      iconColor: "text-orange-600"
    },
    {
      id: 2,
      stepNumber: "02", 
      title: "Mobil Tətbiq Dizaynı",
      description: "İstifadəçi dostu interfeys və yüksək funksionallıq təmin edən mobil tətbiqlər. iOS və Android platformalarında möhtəşəm tətbiqlər.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      iconColor: "text-blue-600"
    },
    {
      id: 3,
      stepNumber: "03",
      title: "Bulud və Server Xidmətləri", 
      description: "Etibarlı və sürətli bulud hosting, server xidmətləri və verilənlər bazası həlləri. 24/7 texniki dəstək ilə biznesinizin fasiləsiz işləməsi.",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      iconColor: "text-purple-600"
    },
    {
      id: 4,
      stepNumber: "04",
      title: "İT Həllər və Dəstək",
      description: "Şəbəkə, təhlükəsizlik və texniki dəstək xidmətləri. Biznesiniz üçün sabit və etibarlı İT infrastrukturu.",
      bgColor: "bg-green-100", 
      textColor: "text-green-600",
      iconColor: "text-green-600"
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, steps.length]);

  const goToStep = (index) => {
    setCurrentStep(index);
    setIsAutoPlay(false);
  };

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
    setIsAutoPlay(false);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
    setIsAutoPlay(false);
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ color: '#16163a' }}>
      {/* Header Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-orange-100 text-[#16163a] rounded-full text-sm font-medium">
              HOW WE WORK
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Softlink İlə Sizin <br />
            <span className="text-[#16163a]">Rəqəmsal Gələcəyiniz</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Innovativ veb və İT həllər təqdim edən peşəkar komandadır. Biznesinizi rəqəmsal dünyada güclü mövqeyə sahib etmək üçün buradadıq.
          </p>
        </div>
      </div>

      {/* Steps Slider Section */}
      <div className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Slider Controls */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Bizim İş <span className="text-[#16163a]">Prosesimiz</span>
            </h2>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={prevStep}
                className="p-3 rounded-full border-2 border-gray-300 hover:border-[#16163a] hover:bg-[#16163a] hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextStep}
                className="p-3 rounded-full border-2 border-gray-300 hover:border-[#16163a] hover:bg-[#16163a] hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Steps Container */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentStep * 50}%)` }}
              >
                {steps.map((step, index) => (
                  <div key={step.id} className="w-1/2 flex-shrink-0 px-4">
                    <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 h-96">
                      <div className="h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-gray-400 font-medium text-lg">Step</span>
                          <span className={`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center ${step.textColor} font-bold text-2xl`}>
                            {step.stepNumber}
                          </span>
                        </div>
                        
                        <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                          {step.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed text-lg flex-grow">
                          {step.description}
                        </p>
                        
                        <div className={`flex items-center ${step.textColor} font-medium mt-6 group cursor-pointer`}>
                          <span className="mr-2">Ətraflı</span>
                          <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep 
                      ? 'bg-[#16163a] w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[#16163a] h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-100 text-[#16163a] rounded-full text-sm font-medium mb-4">
              MİSSİYAMIZ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Biznesinizi Gələcəyə <br />
              <span className="text-[#16163a]">Hazırlayırıq</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Texnologiya ilə Dəyişim
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Bizim məqsədimiz bizneslərin rəqəmsal mühitdə daha güclü mövqeyə sahib olması və texnologiyanın verdiyi imkanlardan maksimum yararlanmasıdır.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fəaliyyətimiz müştərinin ehtiyaclarını dəqiq anlamaq, müasir texnologiyalarla optimal həllər qurmaq və nəticəyə fokuslanmaq üzərinde qurulub.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#16163a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">İnkişaf</h4>
                <p className="text-sm text-gray-600">Rəqəmsal dünyada inkişaf</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Keyfiyyət</h4>
                <p className="text-sm text-gray-600">Yüksək keyfiyyətli həllər</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Dəstək</h4>
                <p className="text-sm text-gray-600">Daimi tərəfdaşlıq</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">İnnovasiya</h4>
                <p className="text-sm text-gray-600">Yeni texnologiyalar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              DƏYƏRLƏRIMIZ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bizə Güvənin <br />
              <span className="text-blue-500">Əsasları</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#16163a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">İnnovasiya</h3>
                  <p className="text-gray-600 leading-relaxed">Daim yeni texnologiyaları tətbiq edirik və innovativ həllər təklif edirik</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Etibarlılıq</h3>
                  <p className="text-gray-600 leading-relaxed">Layihələri vaxtında və yüksək keyfiyyətlə təhvil veririk</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Şəffaflıq</h3>
                  <p className="text-gray-600 leading-relaxed">Proseslərdə açıq və hesabatlı işləyirik, hər addımı izləyə bilərsiniz</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V18.75A.75.75 0 0112 18zM3.75 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75zM18.75 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H19.5a.75.75 0 01-.75-.75z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Daimi Dəstək</h3>
                  <p className="text-gray-600 leading-relaxed">Müştərilərimizi layihə bitdikdən sonra da dəstəkləyirik</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  
    </div>
  );
}

export default About;