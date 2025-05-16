export const actualizarCorreo = async ({ matricula, nuevoCorreo, contrasena }) => {
  const res = await fetch("http://localhost:3000/cambiar-correo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ matricula, nuevoCorreo, contrasena }),
  });

  const data = await res.json();
  return { ok: res.ok, data };
};
