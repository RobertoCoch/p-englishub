const connection = require('../models/db');

const obtenerPerfil = (req, res) => {
    const matricula = req.params.matricula.trim();
    console.log('Matricula recibida:', matricula); 

    const query = `
    SELECT l.matricula, p.semestre, p.carrera, p.nombre, p.edad, p.correo
    FROM logina l
    JOIN alumno p ON l.matricula = p.matricula
    WHERE l.matricula = ?
  `;

   connection.query(query, [matricula], (err, results) => {
    if (err) {
        console.error('Error en la consulta:', err);
      return res.status(500).json({ error: 'Error en la base de datos' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Perfil no encontrado' });
    }

    res.json(results[0]);
  });
}


const cambiarContrasena = async (req, res) => {
  const { matricula, contrasenaActual, nuevaContrasena } = req.body;

  try {
    const [rows] = await conexion.query('SELECT contraseña FROM logina WHERE matricula = ?', [matricula]);
    if (rows.length === 0) return res.status(404).json({ error: 'Matricula no encontrada' });

    const alumno = rows[0];
    if (alumno.password !== contrasenaActual) {
      return res.status(401).json({ error: 'Contraseña actual incorrecta' });
    }

    await conexion.query('UPDATE logina SET contraseña = ? WHERE matricula = ?', [nuevaContrasena, matricula]);
    res.json({ mensaje: 'Contraseña actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al cambiar la contraseña' });
  }
};


module.exports = { obtenerPerfil, cambiarContrasena };