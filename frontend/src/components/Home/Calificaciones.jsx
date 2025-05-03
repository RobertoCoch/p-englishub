import React from 'react'
import { Navbar } from '../Layout/Navbar'
import { ProgressBar } from '../Layout/ProgressBar'

const mockGrades = [
    { subject: "Reading Comprehension", grade: 85, maxGrade: 100 },
    { subject: "Grammar & Writing", grade: 92, maxGrade: 100 },
    { subject: "Listening Practice", grade: 78, maxGrade: 100 },
    { subject: "Speaking & Pronunciation", grade: 88, maxGrade: 100 },
    { subject: "Vocabulary", grade: 95, maxGrade: 100 },
  ];

export const Calificaciones = () => {
  return (
    <div className='w-screen h-screen font-spartan'>
    <Navbar></Navbar>

    <div className='w-screen h-screen flex flex-col gap-3 items-center'>
      <h2 className='font-bold text-3xl w-9/10 pt-10 pb-3'> Calificaciones del Semestre</h2>
      <div className=' w-screen h-screen flex flex-col md:flex-row gap-5 md:h-9/10 md:justify-center md:items-start items-center'>
        <div className='w-9/10 rounded-sm flex flex-col justify-center p-10 border bg-card text-card-foreground shadow-sm md:h-7/10 md:w-4/10'>
            <h2 className='font-bold text-[#3E55DA] text-2xl pb-5'>Promedio General</h2>
            <h3 className='font-medium text-md'>Promedio Actual</h3>
            <ProgressBar value={50}></ProgressBar>
        </div>

        <div className='w-9/10 rounded-sm flex flex-col justify-center p-10 border bg-card text-card-foreground shadow-sm md:h-7/10 md:w-5/10'>
        <h2 className='font-bold text-[#3E55DA] text-2xl pb-5'>Detalle por Habilidad</h2>
              <div className='flex flex-col gap-5'>
                {mockGrades.map((item, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between">
                      <span className='font-medium text-md'>{item.subject}</span>
                      <span className="font-medium">{item.grade} / {item.maxGrade}</span>
                    </div>
                    <ProgressBar value={(item.grade / item.maxGrade) * 100} className="h-2 bg-english-lightBlue" />

                  </div>
                ))}
              </div>
            
        </div>
      </div>
    </div>
  </div>
  )
}
