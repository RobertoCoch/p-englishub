const mockAvisos = [
  {
    id: 1,
    titulo: "Cambio de fecha del examen",
    materia: "Inglés",
    descripcion: "El examen de vocabulario se reprograma para el lunes 20 de mayo.",
    fecha: "2025-05-15"
  },
  {
    id: 2,
    titulo: "Tarea extra",
    materia: "Gramática",
    descripcion: "Se ha agregado una tarea opcional para subir nota en tiempos verbales.",
    fecha: "2025-05-14"
  },
  {
    id: 3,
    titulo: "Lectura obligatoria",
    materia: "Lectura",
    descripcion: "Deben leer el cuento 'El Principito' para el viernes.",
    fecha: "2025-05-13"
  }
];

export const AvisosM = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className="flex w-9/10 h-20 items-center">
        <h2 className='font-bold text-3xl'>Avisos Publicados</h2>
        <button title='Crear Tarea' className='cursor-pointer flex items-center w-auto h-10 bg-[#162474] rounded-md text-white hover:bg-[#3E55DA] ml-5'>
            <p className='text-lg p-5 hidden sm:inline'>Crear Aviso</p>
          </button>
      </div>

      <div className='w-9/10 flex flex-col gap-5 items-center md:w-7/10'>
        {mockAvisos.map(aviso => (
          <div key={aviso.id} className='bg-white shadow-md rounded-md w-full p-5 hover:bg-gray-50 transition-all'>
            <h3 className='text-2xl font-semibold text-[#162474]'>{aviso.titulo}</h3>
            <p className='text-gray-700'><span className='font-medium'>Materia:</span> {aviso.materia}</p>
            <p className='text-gray-700'><span className='font-medium'>Descripción:</span> {aviso.descripcion}</p>
            <p className='text-gray-500 text-sm'><span className='font-medium'>Publicado el:</span> {aviso.fecha}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
