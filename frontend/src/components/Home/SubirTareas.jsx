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
                <h2 className='font-bold text-3xl w-9/10 pt-10 pb-3'> Entrega de Tareas</h2>
                <div className='w-9/10 flex flex-col gap-5 items-center md:flex-row md:justify-center'>
                        
                        <div className='w-9/10 bg-card text-card-foreground shadow-sm rounded-sm md:w-7/10 mt-5 md:mt-0 md:self-start'>
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


                        <div className='w-9/10 bg-card text-card-foreground shadow-sm rounded-sm md:w-7/10 md:self-start'>
                            <h3 className='font-bold rounded-t-sm text-2xl bg-[#D0D6F6] p-5'>Subir tareas</h3>
                            <div className='bg-card text-card-foreground shadow-sm rounden-sm p-5'> 
                            <h2 className="text-xl font-semibold mb-4 text-center">Subir archivo</h2>

                            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-blue-400 transition-colors">
                                        <svg
                                            className="w-12 h-12 text-gray-400 mb-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 16V8a4 4 0 118 0v8m-4 4v-4m0 0H9m3 0h3"
                                            />
                                        </svg>

                                        <p className="text-sm text-gray-600 mb-2">Arrastra un archivo aquí o</p>

                                        <label
                                            htmlFor="file-upload"
                                            className="cursor-pointer inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                                        >
                                            Selecciona un archivo
                                        </label>

                                        <input
                                            id="file-upload"
                                            type="file"
                                            className="hidden"
                                            onChange={() => {}}
                                        />
                                        </div>

                                        <p className="text-xs text-gray-500 mt-3 text-center">
                                        Archivos permitidos: PDF, PNG, JPG (máx. 10MB)
                                        </p>
                            </div>
                        </div>
                
                </div>

                
            </div>
            
        </div>

    </div>
  )
}
