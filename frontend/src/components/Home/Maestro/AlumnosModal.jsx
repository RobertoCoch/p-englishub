import React, { useEffect, useState } from 'react';

export const AlumnosModal = ({ isOpen, onClose, idClase }) => {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    if (isOpen && idClase) {
      fetch(`http://localhost:3000/clase/${idClase}`)
        .then(res => res.json())
        .then(data => setAlumnos(data))
        .catch(err => console.error("Error al obtener alumnos:", err));
    }
  }, [isOpen, idClase]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className='bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2'>
        <h3 className='text-xl font-bold mb-4'>Lista de Alumnos</h3>
        <ul className='space-y-2 max-h-64 overflow-y-auto'>
          {alumnos.map(alumno => (
            <li key={alumno.matricula}>
              <p><span className='font-medium'>Matrícula:</span> {alumno.matricula}</p>
              <p><span className='font-medium'>Nombre:</span> {alumno.nombre}</p>
              <p><span className='font-medium'>Edad:</span> {alumno.edad}</p>
              <hr className='my-2' />
            </li>
          ))}
        </ul>
        <button onClick={onClose} className='mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>
          Cerrar
        </button>
      </div>
    </div>
  );
};
