const conection = require('../models/db');

const obtenerAvisosPorMaestro = (req, res) => {
  const matricula = req.params.matricula.trim();

  const query = `
    SELECT a.id_aviso, a.titulo, a.mensaje AS descripcion, a.fecha_publicacion AS fecha, c.materia
    FROM avisos a
    JOIN clases c ON a.id_clase = c.id_clase
    WHERE c.id_maestro = ?
    ORDER BY a.fecha_publicacion DESC
  `;

  conection.query(query, [matricula], (err, results) => {
    if (err) {
      console.error("Error al obtener avisos:", err);
      return res.status(500).json({ error: "Error al obtener avisos del maestro" });
    }

    res.json(results);
  });
};

module.exports = {
  obtenerAvisosPorMaestro
};
