import { Link } from 'react-router-dom'
import { BookCheck, Megaphone, Users } from 'lucide-react'

export const SidebarM = () => {
  return (
    <aside className='h-screen w-2/10 bg-[#162474] hidden lg:inline text-white'>
        <div className='flex flex-col items-start p-4 gap-5' >
        
            <h2 className='font-extrabold text-4xl'>Englishub</h2>
              <Link to='/maestro' className='w-full'>
                <button className=' flex text-xl hover:bg-[#DAC33E] hover:text-black w-full text-start p-2 rounded-sm'> 
                <Users className='w-6 h-6 mr-3'/>
                Grupos
                </button>
              </Link>
              
              <Link to='tareasm' className='w-full'>
                <button className='flex text-xl hover:bg-[#DAC33E] hover:text-black w-full text-start p-2 rounded-sm'>
                <BookCheck className='w-6 h-6 mr-3'/>
                Tareas
                </button>
              </Link>
              
              <Link to='avisosm' className='w-full'>
                <button className='flex text-xl hover:bg-[#DAC33E] hover:text-black w-full text-start p-2 rounded-sm'>
                <Megaphone className='w-6 h-6 mr-3'/>
                Avisos
                </button>
              </Link>
        </div>
    </aside>
  )
}
