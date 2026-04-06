import React, { useState } from 'react'
import { Menu, X, Heart, ShoppingCart, User2 } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className='w-full px-5 md:px-20 mt-5'>
        <nav className='flex items-center justify-between w-full px-5 md:px-10 bg-black/80 border-3 rounded-full'>

          {/* Logo */}
          <h1 className='text-[#ede0d4] font-bold text-xl md:text-2xl'>
            GoKart
          </h1>

          {/* Desktop Menu */}
          <ul className='hidden md:flex bg-[#ede0d4] rounded-full cursor-pointer overflow-hidden'>
            <li className='hover:bg-[#F3F4F6] transition font-semibold w-28 text-center py-2 rounded-full'>
              <a href="#">Home</a>
            </li>
            <li className='hover:bg-[#F3F4F6] transition duration-300 ease-in-out font-semibold w-28 text-center py-2 rounded-full'>
              <a href="#">Collection</a>
            </li>
            <li className='hover:bg-[#F3F4F6]  transition font-semibold w-28 text-center py-2 rounded-full'>
              <a href="#">About</a>
            </li>
            <li className='hover:bg-[#F3F4F6] transition font-semibold w-28 text-center py-2 rounded-full'>
              <a href="#">Contact</a>
            </li>
          </ul>

          {/* Icons */}
          <div className='hidden md:flex gap-5'>
            <Heart className='hover:text-[#ede0d4] text-white cursor-pointer transition'/>
            <ShoppingCart className='hover:text-[#ede0d4] text-white cursor-pointer transition'/>
            <User2 className='hover:text-[#ede0d4] text-white cursor-pointer transition'/>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden text-white'>
            {open ? (
              <X size={28} onClick={() => setOpen(false)} className='cursor-pointer'/>
            ) : (
              <Menu size={28} onClick={() => setOpen(true)} className='cursor-pointer'/>
            )}
          </div>
        </nav>
      </section>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-50`}>
        
        <div className='flex justify-end p-5'>
          <X size={28} onClick={() => setOpen(false)} className='cursor-pointer'/>
        </div>

        <ul className='flex flex-col gap-3 mt-10 px-6'>
          <li className='hover:bg-white hover:text-black px-4 py-2 rounded-lg transition'>
            <a href="#">Home</a>
          </li>
          <li className='hover:bg-white hover:text-black px-4 py-2 rounded-lg transition'>
            <a href="#">Collection</a>
          </li>
          <li className='hover:bg-white hover:text-black px-4 py-2 rounded-lg transition'>
            <a href="#">About</a>
          </li>
          <li className='hover:bg-white hover:text-black px-4 py-2 rounded-lg transition'>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className='flex justify-center gap-6 mt-10'>
          <Heart className='cursor-pointer hover:text-[#ede0d4] transition'/>
          <ShoppingCart className='cursor-pointer hover:text-[#ede0d4] transition'/>
          <User2 className='cursor-pointer hover:text-[#ede0d4] transition'/>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className='fixed inset-0 bg-black/50 z-40'
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar