import { X, Lock, Mail, BellRing } from "lucide-react";
import { useState } from "react";

export const Configuracion = ({mostrarConfig, setMostrarConfig}) => {
    const [contrasenaActual, setContrasenaActual] = useState("");
    const [nuevaContrasena, setNuevaContrasena] = useState("");
    const [confirmarContrasena, setConfirmarContrasena] = useState("");
    const [activeSection, setActiveSection] = useState("password");

      const handleGuardarContrasena = async () => {
    if (!contrasenaActual || !nuevaContrasena || !confirmarContrasena) {
      alert("Completa todos los campos");
      return;
    }

    if (nuevaContrasena !== confirmarContrasena) {
      alert("Las nuevas contraseñas no coinciden");
      return;
    }

    try {
      const matricula = localStorage.getItem("matricula"); // o donde estés guardando la sesión

      const res = await fetch("http://localhost:3000/cambiar-contrasena", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          matricula,
          contrasenaActual,
          nuevaContrasena,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Contraseña actualizada con éxito");
        setContrasenaActual("");
        setNuevaContrasena("");
        setConfirmarContrasena("");
      } else {
        alert(data.mensaje || "Error al cambiar la contraseña");
      }
    } catch (error) {
      console.error("Error al cambiar contraseña:", error);
      alert("Hubo un error. Intenta más tarde.");
    }
  };




    if (!mostrarConfig) return null;

    const renderContent = () => {
        switch (activeSection) {
        case "password":
            return (
            <div className="p-4">
                <h3 className="text-lg font-medium mb-4">Cambiar contraseña</h3>
                <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Contraseña actual</label>
                    <input type="password" className="w-full p-2 border rounded" placeholder="••••••••" value={contrasenaActual} onChange={(e) => setContrasenaActual(e.target.value)}/>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Nueva contraseña</label>
                    <input type="password" className="w-full p-2 border rounded" placeholder="••••••••" value={nuevaContrasena} onChange={(e) => setNuevaContrasena(e.target.value)} />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Confirmar contraseña</label>
                    <input type="password" className="w-full p-2 border rounded" placeholder="••••••••"  value={confirmarContrasena} onChange={(e) => setConfirmarContrasena(e.target.value)}/>
                </div>
                <button onClick={handleGuardarContrasena} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Guardar cambios</button>
                </div>
            </div>
            );
        case "email":
            return (
            <div className="p-4">
                <h3 className="text-lg font-medium mb-4">Cambiar correo electrónico</h3>
                <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Correo actual</label>
                    <input type="email" className="w-full p-2 border rounded" placeholder="usuario@ejemplo.com" readOnly />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Nuevo correo</label>
                    <input type="email" className="w-full p-2 border rounded" placeholder="nuevo@ejemplo.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Contraseña</label>
                    <input type="password" className="w-full p-2 border rounded" placeholder="••••••••" />
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Actualizar correo</button>
                </div>
            </div>
            );
        case "notifications":
            return (
            <div className="p-4">
                <h3 className="text-lg font-medium mb-4">Notificaciones por correo</h3>
                <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                    <h4 className="font-medium">Notificaciones de Tareas</h4>
                    <p className="text-sm text-gray-500">Recibir actualizaciones de tareas</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                </div>
                
                <div className="flex items-center justify-between">
                    <div>
                    <h4 className="font-medium">Recordatorios</h4>
                    <p className="text-sm text-gray-500">Recibir recordatorios importantes</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                </div>

                <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Guardar preferencias</button>
                </div>
            </div>
            );
        default:
            return null;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"  style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
            {/* Cabecera del modal */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Configuración</h2>
              <button
                onClick={() => setMostrarConfig(false)}
                className="cursor-pointer p-1 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="flex h-96">
              {/* Navegación lateral */}
              <div className="w-2/5 border-r bg-gray-50">
                <nav className="p-2">
                  <button
                    onClick={() => setActiveSection("password")}
                    className={`cursor-pointer flex items-center p-3 w-full rounded-md mb-1 ${
                      activeSection === "password"
                        ? "bg-blue-100 text-blue-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <Lock size={18} className="mr-2" />
                    <span>Contraseña</span>
                  </button>
                  <button
                    onClick={() => setActiveSection("email")}
                    className={`cursor-pointer flex items-center p-3 w-full rounded-md mb-1 ${
                      activeSection === "email"
                        ? "bg-blue-100 text-blue-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <Mail size={18} className="mr-2" />
                    <span>Correo</span>
                  </button>
                  <button
                    onClick={() => setActiveSection("notifications")}
                    className={`cursor-pointer flex items-center p-3 w-full rounded-md ${
                      activeSection === "notifications"
                        ? "bg-blue-100 text-blue-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <BellRing size={18} className="mr-2" />
                    <span>Notificaciones</span>
                  </button>
                </nav>
              </div>

              {/* Contenido de la sección activa */}
              <div className="w-2/3">{renderContent()}</div>
            </div>
          </div>
        </div>
      )
    }
