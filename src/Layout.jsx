import React from 'react'
import Header from './Components/layouts/header/Header'
import { Outlet } from 'react-router'
import Footer from './Components/layouts/footer/Footer'

function Layout() {
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-black text-yellow-100 font-sans'>
      <div className="fixed inset-0 bg-[url('/src/assets/pattern.png')] opacity-5 pointer-events-none"></div>
      <Header />
      <main className='flex-1 transition-all duration-300 relative'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout;