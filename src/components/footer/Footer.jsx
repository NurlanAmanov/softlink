import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#1a1a3d] w-[90%] mx-auto rounded-xl text-white py-12 my-6">
      <div className="mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              
            </div>
          <p className="text-white mb-6 leading-relaxed">
  Softlink-in innovativ həlləri biznesimizi dəyişdi və mükəmməl nəticələr əldə etdik.
</p>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white text-[#000] rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <Facebook size={20} />
              </a>
             
              <a href="https://www.linkedin.com/in/softlink-technology-solutions-197079386/" className="w-10 h-10 bg-white text-[#000] rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/softlink.az/" className="w-10 h-10 bg-white text-[#000] rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
      <ul className="space-y-3">
  <li>
    <Link to="/" className="text-white hover:text-white hover:translate-x-1 inline-block transition-all">
      Ana Səhifə
    </Link>
  </li>
  <li>
    <Link to="/our" className="text-white hover:text-white hover:translate-x-1 inline-block transition-all">
      Xidmətlər
    </Link>
  </li>
  <li>
    <Link to="/port" className="text-white hover:text-white hover:translate-x-1 inline-block transition-all">
      İşlərimiz
    </Link>
  </li>
  <li>
    <Link to="#why" className="text-white hover:text-white hover:translate-x-1 inline-block transition-all">
      Niyə biz?
    </Link>
  </li>
  <li>
    <Link to="#contact" className="text-white hover:text-white hover:translate-x-1 inline-block transition-all">
      Əlaqə
    </Link>
  </li>
</ul>

          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Xidmətlərimiz</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white hover:text-white hover:translate-x-1 inline-block transition-all">
                  UI/UX Design
                </a>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-white hover:translate-x-1 inline-block transition-all">
                 Veb Saytların Hazırlanması
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-white hover:translate-x-1 inline-block transition-all">
                  Mobil Tətbiq İnkişafı
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-white hover:translate-x-1 inline-block transition-all">
                 Texniki Dəstək
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-white hover:translate-x-1 inline-block transition-all">
                Qrafik Dizayn
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-white hover:translate-x-1 inline-block transition-all">
                Qrafik Dizayn
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Əlaqə</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <a href="tel:+01456852789" className="text-white hover:text-white">
                  +994 10 369 43 18
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <a href="mailto:info@domainname.com" className="text-white hover:text-white">
                  info@domainname.com
                </a>
              </li>
             
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <p className="text-center text-white">
            Copyright © 2025 SOFT LINK
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer   