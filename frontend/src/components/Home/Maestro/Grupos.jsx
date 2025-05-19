import React, { useEffect, useState } from 'react';
import { AlumnosModal } from './AlumnosModal'; // importa tu modal

export const Grupos = () => {
  const [clases, setClases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [claseSeleccionada, setClaseSeleccionada] = useState(null);

  useEffect(() => {
    const matricula = localStorage.getItem("matricula");
    if (!matricula) {
      setError("No hay matrícula guardada");
      setLoading(false);
      return;
    }

    fetch(`http://localhost:3000/clasesmaestro/${matricula}`)
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar las clases');
        return res.json();
      })
      .then(data => {
        setClases(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const abrirModal = (idClase) => {
    setClaseSeleccionada(idClase);
    setModalOpen(true);
  };

  if (loading) return <p>Cargando clases...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='flex flex-col items-center'>
      <h2 className='font-bold text-3xl w-9/10 pt-10 pb-3'>Clases Asignadas</h2>

      <div className='w-9/10 flex flex-col gap-5 items-center md:w-9/10 md:items-start'>
        {clases.map(clase => (
          <div key={clase.id_clase} className='bg-white shadow-md rounded-md w-full md:w-7/10 p-5 hover:bg-gray-50 transition-all'>
            <h3 className='text-2xl font-semibold text-[#162474]'>{clase.materia}</h3>
            <p className='text-gray-700'><span className='font-medium'>Materia:</span> {clase.materia}</p>
            <p className='text-gray-700'><span className='font-medium'>Carrera:</span> {clase.carrera}</p>
            <p className='text-gray-700'><span className='font-medium'>Grupo y Semestre:</span> {clase.grupo_s} (Semestre {clase.semestre})</p>
            <p className='text-gray-700'><span className='font-medium'>Número de estudiantes:</span> {clase.total_alumnos}</p>
            <button
              title='Ver alumnos'
              className='cursor-pointer flex items-center w-auto h-10 bg-[#162474] rounded-md text-white hover:bg-[#3E55DA] p-3 mt-3'
              onClick={() => abrirModal(clase.id_clase)}
            >
              Ver alumnos
            </button>
          </div>
        ))}
      </div>

      <AlumnosModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        idClase={claseSeleccionada}
      />
    </div>
  );
};
