import React, { useEffect, useState } from 'react';

export const Avisos = () => {
  const [avisos, setAvisos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const matricula = localStorage.getItem("matricula");
    if (!matricula) {
      setError("No hay matrícula en localStorage");
      setLoading(false);
      return;
    }

    fetch(`http://localhost:3000/avisosalumno/${matricula}`)
      .then(res => {
        if (!res.ok) throw new Error("Error al obtener avisos");
        return res.json();
      })
      .then(data => {
        setAvisos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Cargando avisos...</p>;
  if (error) return <p className="text-center text-red-600 mt-10">Error: {error}</p>;

  return (
    <div className='flex flex-col gap-1 items-center md:items-baseline'>
      <h2 className='font-bold text-3xl w-8/10 pt-10 md:pl-15'>Avisos</h2>
      <div className='flex flex-col gap-8 p-10'> 
        {avisos.length === 0 ? (
          <p className='text-gray-500'>No hay avisos disponibles para tus clases.</p>
        ) : (
          avisos.map((aviso) => (
            <div key={aviso.id_aviso} className="p-4 hover:bg-gray-50 bg-card text-card-foreground shadow-sm rounded-lg border-l-[#DAC33E] border-l-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-2xl text-[#3E55DA]">{aviso.titulo}</h3>
                  <p className="text-sm text-gray-500">Materia: {aviso.materia}</p>
                  <p className="text-sm text-gray-500">Publicado: {new Date(aviso.fecha).toLocaleDateString()}</p>
                  <p className="text-lg text-gray-600 mt-2">{aviso.mensaje}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
