const connection = require('../models/db');

const publicarAviso = (req, res) => {
  const { id_clase, titulo, mensaje } = req.body;

   console.log('Datos recibidos para nuevo aviso:', {
    id_clase,
    titulo,
    mensaje
  });


  if (!id_clase || !titulo || !mensaje) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  const query = `
    INSERT INTO avisos (id_clase, titulo, mensaje, fecha_publicacion)
    VALUES (?, ?, ?, NOW())
  `;

  connection.query(query, [id_clase, titulo, mensaje], (err, result) => {
    if (err) {
      console.error('Error al publicar aviso:', err);
      return res.status(500).json({ message: "Error al publicar aviso" });
    }
    console.log('Aviso guardado con éxito. ID insertado:', result.insertId);
    res.status(201).json({ message: "Aviso publicado correctamente" });
  });
};

module.exports = { publicarAviso };
