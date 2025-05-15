
const mockAvisos = [
    { id: 1, title: "Upcoming Test", dueDate: "2025-05-10", message: "Remember we have a vocabulary test next Tuesday, May 12th. Study chapters 7-9." },
    { id: 2, title: "Class Canceled", dueDate: "2025-04-28", message: "This Friday's class (May 5th) will be canceled due to teacher training. Please complete the online activities."},
    { id: 3, title: "Guest Speaker", dueDate: "2025-04-28", message: "We will have a native English speaker from London visiting our class on May 20th. Prepare questions!"}
  ];

export const Avisos = () => {
  return (
    <div className='flex flex-col gap-1 items-center md:items-baseline'>
        <h2 className='font-bold text-3xl w-8/10 pt-10 md:pl-15'> Avisos</h2>
        <div className='flex flex-col gap-8 p-10'> 
            {mockAvisos.map((avisos, i) => (
                <div key={avisos.id} className="p-4 hover:bg-gray-50 bg-card text-card-foreground shadow-sm rounded-lg border-l-[#DAC33E]">
                    <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-2xl text-[#3E55DA]">{avisos.title}</h3>
                                <p className="text-sm text-gray-500">Publicado: {avisos.dueDate}</p>
                                <p className="text-lg text-gray-500">{avisos.message}</p>
                            </div>
                    </div>
                </div>
            ))
            }
        </div>
    </div>
  )
}
