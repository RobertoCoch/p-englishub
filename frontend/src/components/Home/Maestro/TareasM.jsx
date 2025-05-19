const mockTareasMaestro = [
  { id: 1, materia: "Inglés", nombre: "Presentación Oral", estado: "pendiente", fechaLimite: "2025-05-20" },
  { id: 2, materia: "Gramática", nombre: "Ejercicios de tiempos verbales", estado: "completado", fechaLimite: "2025-05-10" },
  { id: 3, materia: "Lectura", nombre: "Análisis de cuento", estado: "no entregado", fechaLimite: "2025-05-15" },
  { id: 4, materia: "Inglés", nombre: "Quiz de vocabulario", estado: "pendiente", fechaLimite: "2025-05-22" },
];

export const TareasM = () => {
  const coloresEstado = {
    pendiente: "text-yellow-600 font-bold",
    completado: "text-green-600 font-bold",
    "no entregado": "text-red-600 font-bold"
  };

  return (
    <div className='flex flex-col items-center'>
      <div className="flex w-9/10 h-20 items-center">
        <h2 className='font-bold text-3xl'>Tareas Asignadas</h2>
        <button title='Crear Tarea' className='cursor-pointer flex items-center w-auto h-10 bg-[#162474] rounded-md text-white hover:bg-[#3E55DA] ml-5'>
            <p className='text-lg p-5 hidden sm:inline'>Crear Tarea</p>
          </button>
      </div>
      

      <div className='w-9/10 flex flex-col gap-5 items-center md:w-7/10'>
        {mockTareasMaestro.map(tarea => (
          <div key={tarea.id} className='bg-white shadow-md rounded-md w-full p-5 hover:bg-gray-50 transition-all'>
            <h3 className='text-xl font-semibold text-[#162474]'>{tarea.nombre}</h3>
            <p className='text-gray-700'>Materia: <span className='font-medium'>{tarea.materia}</span></p>
            <p className='text-gray-700'>
              Estado: <span className={coloresEstado[tarea.estado]}>{tarea.estado}</span>
            </p>
            <p className='text-gray-700'>Fecha límite: <span className='font-medium'>{tarea.fechaLimite}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};