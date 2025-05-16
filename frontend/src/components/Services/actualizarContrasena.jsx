export const actualizarContrasena = async ({ matricula, contrasenaActual, nuevaContrasena }) => {
  const res = await fetch("http://localhost:3000/cambiar-contrasena", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ matricula, contrasenaActual, nuevaContrasena }),
  });

  const data = await res.json();
  return { ok: res.ok, data };
};
