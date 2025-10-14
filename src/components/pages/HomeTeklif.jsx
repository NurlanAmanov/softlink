import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion'; // Framer Motion import edirik

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Mesajınız göndərildi!');
  };

  return (
    <div className="min-h-screen py-16">
      <div className="w-[90%] mx-auto">
        <div className="bg-[#1a1a3d]  rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Sol tərəf - Mətn və statistika */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Bizimlə Əlaqə Saxlayın
              </h2>
              <p className="text-white text-lg mb-8 leading-relaxed">
                Innovativ və təsirli dizayn həllərini təqdim etməkdə ixtisaslaşırıq. Brendləri yüksəldən və nəticələr gətirən həllər yaradırıq. Rəqəmsal təcrübələrdən çap mediasına qədər, yaradıcı peşəkarlar komandamız ideyaları auditoriya ilə rezonans yaradan cəlbedici vizual hekayələrə çevirməyə həsr olunub.
              </p>
            </div>

            {/* Sağ tərəf - Əlaqə Formu */}
            <div className="rounded-2xl p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#1a1a3d] rounded-full flex items-center justify-center">
                      <Send className="text-white" size={32} />
                    </div>
                  </div>
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="#ffff"
                      strokeWidth="2"
                      strokeDasharray="340"
                      strokeDashoffset="0"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white text-center mb-6">
                Mesaj Göndərin
              </h3>

              {/* Animasiya əlavə edilmiş form */}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }} // Yavaşca görünən animasiya
                className="space-y-3"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#1a1a3d] focus:outline-none transition-colors text-sm"
                  placeholder="Ad Soyad"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#1a1a3d] focus:outline-none transition-colors text-sm"
                  placeholder="Email"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#1a1a3d] focus:outline-none transition-colors text-sm"
                  placeholder="Telefon"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#1a1a3d] focus:outline-none transition-colors resize-none text-sm"
                  placeholder="Mesajınız"
                />

                <button
                  onClick={handleSubmit}
                  className="w-full bg-white text-[#1a1a3d] py-3 rounded-lg font-semibold hover:bg-white transition-all flex items-center justify-center gap-2 group text-sm"
                >
                  Göndər
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
