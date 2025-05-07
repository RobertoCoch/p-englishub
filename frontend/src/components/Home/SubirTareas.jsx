import { Sidebar } from '../Layout/Sidebar'
import { Navbar } from '../Layout/Navbar'

const mockAssignments = [
    { id: 1, title: "Essay on Cultural Diversity", dueDate: "2025-05-10" },
    { id: 2, title: "Grammar Exercises Chapter 5", dueDate: "2025-04-28", grade: 90 }
  ];

export const SubirTareas = () => {
  return (
    <div className='w-screen h-screen flex font-spartan'>
    <Sidebar></Sidebar>
        <div className='flex flex-col lg:w-8/10 w-screen'>
            <Navbar></Navbar>
            <div className='flex flex-col gap-3 items-center'>
                <h2 className='font-bold text-3xl w-8/10 pt-10 pb-3'> Entrega de Tareas</h2>
                <div className='w-9/10 flex flex-col gap-5 items-center md:flex-row md:justify-center'>
                        <h3 className='font-bold rounded-t-sm text-2xl bg-[#D0D6F6] p-5'>Tareas Pendientes</h3>
                        <div className='bg-card text-card-foreground shadow-sm rounden-sm'> 
                            {mockAssignments.map((assignment, i) => (
                                <div key={assignment.id} className="p-4 hover:bg-gray-50">
                                <div className="flex justify-between items-center">
                                    <div>
                                    <h3 className="font-medium">{assignment.title}</h3>
                                    <p className="text-sm text-gray-500">Fecha límite: {assignment.dueDate}</p>
                                    </div>
                                    <button className='bg-[#3E55DA] w-auto h-auto text-white p-1.5 rounded-sm hover:bg-[#162474]'>Entregar</button>
                                </div>
                                </div>
                            ))
                            }
                        </div>

                        <div className='w-9/10 bg-card text-card-foreground shadow-sm rounded-sm md:w-7/10 mt-20'>
                            <h3 className='font-bold rounded-t-sm text-2xl bg-[#D0D6F6] p-5'>Entregar tareas</h3>
                            <div className='bg-card text-card-foreground shadow-sm rounden-sm'> 
                                {mockAssignments.map((assignment, i) => (
                                    <div key={assignment.id} className="p-4 hover:bg-gray-50">
                                    <div className="flex justify-between items-center">
                                        <div>
                                        <h3 className="font-medium">{assignment.title}</h3>
                                        <p className="text-sm text-gray-500">Fecha límite: {assignment.dueDate}</p>
                                        </div>
                                        <button className='bg-[#3E55DA] w-auto h-auto text-white p-1.5 rounded-sm hover:bg-[#162474]'>Entregar</button>
                                    </div>
                                    </div>
                                ))
                                }
                            </div>
                    </div>
                
                </div>

                
            </div>
            
        </div>

    </div>
  )
}
