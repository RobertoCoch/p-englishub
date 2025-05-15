import React from 'react'
import { Navbar } from '../Layout/Navbar';
import { Sidebar } from '../Layout/Sidebar';

const mockAssignments = [
    { id: 1, title: "Essay on Cultural Diversity", status: "pendiente", dueDate: "2025-05-10" },
    { id: 2, title: "Grammar Exercises Chapter 5", status: "completado", dueDate: "2025-04-28", grade: 90 },
    { id: 3, title: "Pronunciation Recording", status: "completado", dueDate: "2025-04-20", grade: 85 },
    { id: 4, title: "Reading Comprehension Worksheet", status: "no entregado", dueDate: "2025-04-15" },
    { id: 5, title: "Vocabulary Quiz Preparation", status: "pendiente", dueDate: "2025-05-15" },
    { id: 5, title: "Vocabulary Quiz Preparation", status: "no entregado", dueDate: "2025-05-15"}
  ];

export const Tareas = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='font-bold text-3xl w-9/10 pt-10 pb-3'>Tareas</h2>

      <div className='w-9/10 flex flex-col gap-5 items-center md:flex-row md:justify-center'>
        <div className='w-9/10 bg-card text-card-foreground shadow-sm rounded-sm md:w-7/10'>
          <h3 className='font-bold rounded-t-sm text-2xl bg-[#D0D6F6] p-5'>Pendientes</h3>
          <div>
            <div className='bg-card text-card-foreground shadow-sm rounden-sm'> 
              {mockAssignments
                .filter(a => a.status === "pendiente")
                .map(assignment => (
                  <div key={assignment.id} className="p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{assignment.title}</h3>
                        <p className="text-sm text-gray-500">Fecha límite: {assignment.dueDate}</p>
                        <p className="text-sm text-gray-500">Estado: <span className='text-[#DAC33E] font-bold'>{assignment.status}</span></p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className='w-9/10 bg-card text-card-foreground shadow-sm rounded-sm md:w-7/10'>
          <h3 className='font-bold rounded-t-sm text-2xl bg-[#D0D6F6] p-5'>Completados</h3>
          <div >
            <div className='bg-card text-card-foreground shadow-sm rounden-sm'> 
              {mockAssignments
                .filter(a => a.status === "completado")
                .map(assignment => (
                  <div key={assignment.id} className="p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{assignment.title}</h3>
                        <p className="text-sm text-gray-500">Fecha límite: {assignment.dueDate}</p>
                        <p className="text-sm text-gray-500">Estado: <span className='text-[#55DA3E] font-bold'>{assignment.status}</span> </p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className='w-9/10 bg-card text-card-foreground shadow-sm rounded-sm mb-10 md:mb-0 md:w-7/10'>
          <h3 className='font-bold rounded-t-sm text-2xl bg-[#D0D6F6] p-5'>No entregados</h3>
          <div>
            <div className='bg-card text-card-foreground shadow-sm rounden-sm'> 
              {mockAssignments
                .filter(a => a.status === "no entregado")
                .map(assignment => (
                  <div key={assignment.id} className="p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{assignment.title}</h3>
                        <p className="text-sm text-gray-500">Fecha límite: {assignment.dueDate}</p>
                        <p className="text-sm text-gray-500">Estado: <span className='text-[#DA3E55] font-bold'>{assignment.status}</span> </p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
