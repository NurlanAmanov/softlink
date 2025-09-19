import React from 'react'
import CardSwap, { Card } from './Slider'
function SliderCard() {
  return (
    <>
    <div className="slider-section w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-between py-12">
  {/* Left Text */}
  <div className="text-content max-w-lg mb-8 lg:mb-0">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Biznesiniz üçün güclü <span className="text-blue-600">veb həllər</span>
    </h2>
    <p className="text-gray-600 mb-4">
      • Fərdi dizayna sahib <strong>veb saytların hazırlanması</strong>  
    </p>
    <p className="text-gray-600 mb-4">
      • Sürətli və təhlükəsiz <strong>hosting & domain</strong> xidmətləri  
    </p>
    <p className="text-gray-600 mb-4">
      • Kiçik və orta biznes üçün <strong>hazır veb həllər</strong>  
    </p>
    <a
      href="#"
      className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
    >
      Daha ətraflı →
    </a>
  </div>

  {/* Right Slider */}
  <div className="slider w-[80%] lg:w-[600px]">
    <div className='w-[40%] mx-auto h-[300px]' >
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={false}
      >
        <Card>
          <h3 className="text-xl font-bold text-gray-800">Veb sayt hazırlanması</h3>
          <p className="text-gray-600">Biznesinizə uyğun, sürətli və modern saytlar.</p>
        </Card>
        <Card>
          <h3 className="text-xl font-bold text-gray-800">Hazır veb həllər</h3>
          <p className="text-gray-600">E-ticarət, korporativ saytlar və daha çox.</p>
        </Card>
        <Card>
          <h3 className="text-xl font-bold text-gray-800">Hosting & Domain</h3>
          <p className="text-gray-600">Sabit və təhlükəsiz infrastruktur üzərində.</p>
        </Card>
      </CardSwap>
    </div>
  </div>
</div>

    </>
  )
}

export default SliderCard