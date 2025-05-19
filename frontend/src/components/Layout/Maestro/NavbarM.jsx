import { Columns2, User, Settings, LogOut } from 'lucide-react'
import { useState } from 'react'
import { PerfilModalM } from './PerfilModalM'
import { Configuracion } from '../Configuracion'
import { SidebarMovM } from './SidebarMovM'


export const NavbarM = () => {
  const [mostrar, setMostrar] = useState(true)
  const [mostrarPerfil, setMostrarPerfil] = useState(false)
  const [mostrarConfig, setMostrarConfig] = useState(false)

  const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('matricula');
      window.location.reload();
  }
  return (
    <>
    <nav className='p-5 md:p-0 font-spartan lg:w-10/10 w-screen bg-[#0B1138] h-15 flex justify-around items-center md:justify-between'>
         <div className='flex items-center gap-3 md:ml-10'>
          <button onClick={() => setMostrar(false)} title='Menu' className='md:hidden w-10 h-10 rounded-md text-white hover:bg-[#162474]'>
             <Columns2 className='w-8 h-8'/>
          </button>
          <p className='text-white font-extrabold text-lg'>English Hub</p>
          <span className="text-white hidden md:inline">|</span>
          <span className="truncate text-white hidden md:inline">Portal del Maestro</span>
        </div>
        <div className='flex gap-3 md:mr-10'>

          <button onClick={() => setMostrarPerfil(true)} title='Perfil' className='cursor-pointer flex items-center w-auto h-10 bg-[#162474] rounded-md text-white hover:bg-[#3E55DA]'>
              <User className='w-10 h-10 p-1 md:ml-3'/>
            <p className='text-lg pt-2 pr-3 hidden sm:inline'>Perfil</p>
          </button>

          <button onClick={() => setMostrarConfig(true)} title='Configuracion' className='flex items-center w-auto h-10 bg-[#162474] rounded-md text-white hover:bg-[#3E55DA]'>
            <Settings className='w-10 h-10 p-1 md:ml-3'/>
            <p className='text-lg pt-2 pr-3 pl-1 hidden sm:inline'>Configuración</p>
          </button>
          <button onClick={handleLogout} title='Cerrar Sesión' className='flex items-center w-auto h-10 bg-[#162474] rounded-md text-white hover:bg-[#3E55DA]'>
            <LogOut className='w-10 h-10 p-1 md:ml-3'/>
            <p className='text-lg pt-2 pr-3 hidden sm:inline'>Salir</p>
          </button>
        </div>
    </nav>
    <SidebarMovM mostrar={mostrar} setMostrar={setMostrar} />
    <PerfilModalM isOpen={mostrarPerfil} setIsOpen={setMostrarPerfil} />
    <Configuracion mostrarConfig={mostrarConfig} setMostrarConfig={setMostrarConfig}></Configuracion>
   
    </>
  );
}
