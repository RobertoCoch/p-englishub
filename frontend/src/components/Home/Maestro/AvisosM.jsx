import React, { useState, useEffect } from 'react';
import { AvisoModal } from './AvisoModal';

export const AvisosM = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [avisos, setAvisos] = useState([]);
    const [loading, setLoading] = useState(true);


  
    useEffect(() => {
      const matricula = localStorage.getItem("matricula");

      if (!matricula) {
        console.error("No hay matrícula en localStorage");
        return;
      }

      fetch(`http://localhost:3000/avisosmaestro/${matricula}`)
        .then(res => {
          if (!res.ok) throw new Error("Error al obtener avisos");
          return res.json();
        })
        .then(data => {
          setAvisos(data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Error cargando avisos:", err);
          setLoading(false);
        });
    }, [isModalOpen]);
    return (
    <>
   
     <div className='flex flex-col items-center'>
        <div className="flex w-9/10 h-20 items-center">
          <h2 className='font-bold text-3xl'>Avisos Publicados</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            title='Crear Aviso'
            className='cursor-pointer flex items-center w-auto h-10 bg-[#162474] rounded-md text-white hover:bg-[#3E55DA] ml-5'
          >
            <p className='text-lg p-5 hidden sm:inline'>Crear Aviso</p>
          </button>
        </div>

        <div className='w-9/10 flex flex-col gap-5 items-center md:w-7/10'>
          {loading ? (
            <p>Cargando avisos...</p>
          ) : avisos.length === 0 ? (
            <p>No hay avisos publicados.</p>
          ) : (
            avisos.map(aviso => (
              <div key={aviso.id_aviso} className='bg-white shadow-md rounded-md w-full p-5 hover:bg-gray-50 transition-all'>
                <h3 className='text-2xl font-semibold text-[#162474]'>{aviso.titulo}</h3>
                <p className='text-gray-700'><span className='font-medium'>Materia:</span> {aviso.materia}</p>
                <p className='text-gray-700'><span className='font-medium'>Descripción:</span> {aviso.descripcion}</p>
                <p className='text-gray-500 text-sm'><span className='font-medium'>Publicado el:</span> {new Date(aviso.fecha).toLocaleDateString()}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <AvisoModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
};
