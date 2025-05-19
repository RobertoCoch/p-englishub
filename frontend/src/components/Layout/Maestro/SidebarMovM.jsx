import { Link } from 'react-router-dom'
import { BookCheck, Megaphone, Users, ChevronsLeft } from 'lucide-react'


export const SidebarMovM = ({mostrar, setMostrar}) => {
  return (
    <> 
    <div className={`flex flex-col w-3/5 h-screen fixed top-0 left-0 group bg-[#162474] font-spartan text-white lg:hidden transform transition-transform duration-300 ease-in-out ${
          mostrar ? '-translate-x-full' : 'translate-x-0'
        }`}>
        <div className='flex flex-col items-start p-5 gap-5'>
            <div className='flex justify-between w-full'>
                <h2 className='font-extrabold text-4xl'>Englishub</h2>
                <button title="Esconder" onClick={() => setMostrar(true)} className='cursor-pointer rounded-lg w-10 h-10 hover:bg-[#3E55DA]'><ChevronsLeft className='w-10 h-10'/>
                </button>
            </div>

             <Link to='/maestro' className='w-full'>
                <button className='cursor-pointer flex text-xl hover:bg-[#DAC33E] hover:text-black w-full text-start p-2 rounded-sm'> 
                <Users className='w-6 h-6 mr-3'/>
                Grupos
                </button>
              </Link> 

               <Link to='tareasm' className='w-full'>
                <button className='cursor-pointer flex text-xl hover:bg-[#DAC33E] hover:text-black w-full text-start p-2 rounded-sm'>
                <BookCheck className='w-6 h-6 mr-3'/>
                Tareas
                </button>
              </Link>
              
              <Link to='avisosm' className='w-full'>
                <button className='cursor-pointer flex text-xl hover:bg-[#DAC33E] hover:text-black w-full text-start p-2 rounded-sm'>
                <Megaphone className='w-6 h-6 mr-3'/>
                Avisos
                </button>
              </Link>
        </div>
       
        
    </div>
    </>
  )
}