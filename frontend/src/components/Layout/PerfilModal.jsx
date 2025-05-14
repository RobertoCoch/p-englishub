import { X } from 'lucide-react';

const studentData = {
  nombre: "José Roberto Contreras Chablé",
  matricula: "22E30381",
  edad: 20,
  semestre: "6to Semestre",
  carrera: "Ingeniería en Informatica",
  correo: "contreraschableroberto@gmail.com",
  foto: "https://i.pravatar.cc/150?img=33" // Usamos una imagen de perfil de ejemplo
};

export const PerfilModal = ({ isOpen, setIsOpen }) => {
      if (!isOpen) return null;
  return (
    <>
                {/* Overlay/Backdrop con animación */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out"
        onClick={() => setIsOpen(false)}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        {/* Modal con animación - stopPropagation para evitar que se cierre al hacer clic en el modal */}
        <div 
          className="bg-white rounded-lg shadow-xl w-11/12 max-w-md mx-auto transform transition-all duration-300 ease-in-out scale-100 opacity-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Encabezado del modal */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-[#162474]">Perfil del Estudiante</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="cursor-pointer p-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
              aria-label="Cerrar"
            >
              <X size={24} className="text-gray-700" />
            </button>
          </div>
          
          {/* Contenido del perfil */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              {/* Foto de perfil */}
              <div className="flex-shrink-0">
                <img 
                  src={studentData.foto} 
                  alt="Foto de perfil" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#162474]"
                />
              </div>
              
              {/* Información del estudiante */}
              <div className="flex-grow space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{studentData.nombre}</h3>
                  <p className="text-[#3E55DA] font-medium">{studentData.carrera}</p>
                </div>
                
                {/* Detalles del estudiante */}
                <div className="space-y-2 pt-3">
                  <div className="flex">
                    <span className="font-medium text-gray-700 w-24">Matricula:</span>
                    <span className="text-gray-600">{studentData.matricula}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-gray-700 w-24">Edad:</span>
                    <span className="text-gray-600">{studentData.edad} años</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-gray-700 w-24">Semestre:</span>
                    <span className="text-gray-600">{studentData.semestre}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-gray-700 w-24">Correo:</span>
                    <span className="text-gray-600 break-all">{studentData.correo}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
    </>
  )
}
