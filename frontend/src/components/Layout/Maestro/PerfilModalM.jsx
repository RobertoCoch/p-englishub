import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const foto = "https://cdn-icons-png.flaticon.com/512/9706/9706583.png"; // Puedes cambiar esta imagen por una más apropiada

export const PerfilModalM = ({ isOpen, setIsOpen }) => {
  const [maestroData, setMaestroData] = useState(null);
  const matricula = localStorage.getItem("matricula");

  useEffect(() => {
    if (isOpen && matricula) {
      fetch(`http://localhost:3000/perfilmaestro/${matricula}`)
        .then(res => res.json())
        .then(data => setMaestroData(data))
        .catch(err => {
          console.error("Error al obtener perfil del maestro:", err);
        });
    }
  }, [isOpen, matricula]);

  if (!isOpen || !maestroData) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={() => setIsOpen(false)}
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-11/12 max-w-md mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Encabezado */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#162474]">Perfil del Maestro</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="cursor-pointer p-1 rounded-full hover:bg-gray-200"
            aria-label="Cerrar"
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Contenido */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Foto */}
            <div className="flex-shrink-0">
              <img 
                src={foto} 
                alt="Foto de perfil" 
                className="w-32 h-32 rounded-full object-cover border-4 border-[#162474]"
              />
            </div>

            {/* Datos */}
            <div className="flex-grow space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">{maestroData.nombre}</h3>

              <div className="space-y-2 pt-3">
                <div className="flex">
                  <span className="font-medium text-gray-700 w-24">Matrícula:</span>
                  <span className="text-gray-600">{matricula}</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-700 w-24">Correo:</span>
                  <span className="text-gray-600 break-all">{maestroData.correo}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
