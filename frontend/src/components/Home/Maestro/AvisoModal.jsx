import React, { useEffect, useState } from 'react';

export const AvisoModal = ({ isOpen, setIsOpen }) => {
  const [clases, setClases] = useState([]);
  const [idClase, setIdClase] = useState('');
  const [titulo, setTitulo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const matricula = localStorage.getItem("matricula");
    if (matricula && isOpen) {
      fetch(`http://localhost:3000/clasesmaestro/${matricula}`)
        .then(res => res.json())
        .then(data => setClases(data))
        .catch(err => console.error('Error al obtener clases:', err));
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/avisos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id_clase: idClase, titulo, mensaje })
    })
    .then(res => res.json())
    .then(data => {
      setSuccess(data.message);
      setTitulo('');
      setMensaje('');
      setIdClase('');
      setTimeout(() => setIsOpen(false), 1500);
    })
    .catch(err => console.error("Error al publicar aviso:", err));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Publicar Aviso</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Clase:</label>
          <select value={idClase} onChange={e => setIdClase(e.target.value)} required className="w-full mb-4 p-2 border rounded">
            <option value="">Selecciona una clase</option>
            {clases.map(clase => (
              <option key={clase.id_clase} value={clase.id_clase}>
                {clase.materia} - {clase.grupo_s}
              </option>
            ))}
          </select>

          <label className="block mb-2">Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
            required
          />

          <label className="block mb-2">Mensaje:</label>
          <textarea
            value={mensaje}
            onChange={e => setMensaje(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
            rows={4}
            required
          ></textarea>

          <button className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">
            Enviar Aviso
          </button>
          <button className="cursor-pointer ml-4 text-gray-500" onClick={() => setIsOpen(false)} type="button">
            Cancelar
          </button>

          {success && <p className="text-green-600 mt-3">{success}</p>}
        </form>
      </div>
    </div>
  );
};
