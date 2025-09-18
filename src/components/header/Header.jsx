import React from 'react'
import logo from  '../../assets/logo/logo2.png'
import { CiMenuFries } from 'react-icons/ci'
function Header() {
  return (
    <>
    <header>
        <nav>
            <div className="mobile-menu flex items-center justify-between w-full p-3">
                <div className="logo w-[30%] flex items-center gap-1.5">
                    <img src={logo} alt="" className='w-[25%]  object-cover' />
                    <a href="" className='text-black'>SoftLink</a>
                </div>
                <div className="menu-bar w-[10%]">
                    <CiMenuFries className='text-xl font-bold' />
                </div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header