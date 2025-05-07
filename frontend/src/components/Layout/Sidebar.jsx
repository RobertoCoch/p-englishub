import { Link } from 'react-router-dom'
import { BookCheck, Upload, Megaphone, ChartBarBig } from 'lucide-react'

export const Sidebar = () => {
  return (
    <aside className='h-screen w-2/10 bg-[#162474] hidden lg:inline text-white'>
        <div className='flex flex-col items-start p-4 gap-5' >
        
            <h2 className='font-extrabold text-4xl'>Englishub</h2>
              <Link to='/' className='w-full'>
                <button className=' flex text-xl hover:bg-[#DAC33E] hover:text-black w-full text-start p-2 rounded-sm'> 
                <ChartBarBig className='w-6 h-6 mr-3'/>
                Calificaciones
                </button>
              </Link>
              
              <Link to='/tareas' className='w-full'>
                <button className='flex text-xl hover:bg-[#DAC33E] hover:text-black w-full text-start p-2 rounded-sm'>
                <BookCheck className='w-6 h-6 mr-3'/>
                Tareas
                </button>
              </Link>

              <Link to='/subirtareas' className='w-full'>
                <button className='flex text-xl hover:bg-[#DAC33E] hover:text-black w-full text-start p-2 rounded-sm'>
                <Upload className='w-6 h-6 mr-3'/>
                Entrega de tareas
                </button>
              </Link>

            <button className='flex text-xl hover:bg-[#DAC33E] hover:text-black w-full text-start p-2 rounded-sm'>
            <Megaphone className='w-6 h-6 mr-3'/>
            Avisos
            </button>
        </div>
    </aside>
  )
}
