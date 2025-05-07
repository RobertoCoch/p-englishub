import React from 'react'
import SideBar from '../../assets/images/sidebar.png'
import Settings from '../../assets/images/settings.png'
import User from '../../assets/images/user.png'
import SingOut from '../../assets/images/sign-out.png'

export const Navbar = () => {
  return (
    <nav className='p-5 md:p-0 font-spartan lg:w-10/10 w-screen bg-[#0B1138] h-15 flex justify-around items-center md:justify-between'>
         <div className='flex items-center gap-3 md:ml-10'>
          <button title='Menu' className='md:hidden w-10 h-10 rounded-md text-white hover:bg-[#162474]'>
            <img src={SideBar} alt="" className='w-9 h-9 ml-0.5'/>
          </button>
          <p className='text-white font-extrabold'>English Hub</p>
        </div>
        <div className='flex gap-3 md:mr-10'>
          <button title='Perfil' className='flex items-center w-auto h-10 bg-[#162474] rounded-md text-white hover:bg-[#3E55DA]'>
            <img src={User} alt="User" className='w-9 h-9 ml-0.5' />
            <p className='text-lg pt-2 pr-3 hidden sm:inline'>Perfil</p>
          </button>
          <button title='Configuracion' className='flex items-center w-auto h-10 bg-[#162474] rounded-md text-white hover:bg-[#3E55DA]'>
            <img src={Settings} alt=""  className='w-8 h-8 ml-1'/>
            <p className='text-lg pt-2 pr-3 pl-1 hidden sm:inline'>Configuración</p>
          </button>
          <button title='Cerrar Sesión' className='flex items-center w-auto h-10 bg-[#162474] rounded-md text-white hover:bg-[#3E55DA]'>
            <img src={SingOut} alt="" className='w-11 h-11'/>
            <p className='text-lg pt-2 pr-3 hidden sm:inline'>Salir</p>
          </button>
        </div>
    </nav>
  )
}
