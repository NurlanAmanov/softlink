import React, { useState } from 'react'
import logo from '../../assets/logo/logonew2.png'
import { CiMenuFries } from 'react-icons/ci'
import { FaPhone } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav className="shadow-md bg-white">
        <div className="menu-container max-w-[1280px] mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="logo flex items-center gap-2">
            <img src={logo} alt="Softlink Logo" className="w-[140px] object-contain" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-800">
            <li><a href="#" className="hover:text-blue-600">Ana səhifə</a></li>
            <li><a href="#" className="hover:text-blue-600">Xidmətlər</a></li>
            <li><a href="#" className="hover:text-blue-600">İşlərimiz</a></li>
            <li><a href="#" className="hover:text-blue-600">Niyə biz?</a></li>
            <li><a href="#" className="hover:text-blue-600">Əlaqə</a></li>
          </ul>

          {/* Contact Button (desktop) */}
          <div className="hidden lg:block">
            <a
              href="tel:+994103694318"
              className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition"
            >
              <span className="text-white w-8 h-8 flex items-center justify-center rounded-full">
                <FaPhone className="text-white" />
              </span>
              +994 10 369 43 18
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <CiMenuFries
              className="text-3xl cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </nav>

      {/* Sidebar (Mobile Menu) */}
      <div
        className={`fixed top-0 left-0 h-full w-[260px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <img src={logo} alt="Softlink Logo" className="w-[120px] object-contain" />
          <IoClose
            className="text-3xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <ul className="flex flex-col gap-4 p-6 font-medium text-gray-800">
          <li><a href="#" className="hover:text-blue-600">Ana səhifə</a></li>
          <li><a href="#" className="hover:text-blue-600">Xidmətlər</a></li>
          <li><a href="#" className="hover:text-blue-600">İşlərimiz</a></li>
          <li><a href="#" className="hover:text-blue-600">Niyə biz?</a></li>
          <li><a href="#" className="hover:text-blue-600">Əlaqə</a></li>
        </ul>

        <div className="px-6 mt-4">
          <a
            href="tel:+994103694318"
            className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition"
          >
            <FaPhone /> +994 10 369 43 18
          </a>
        </div>
      </div>

      {/* Overlay (arka fon qara şəffaf) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  )
}

export default Header
