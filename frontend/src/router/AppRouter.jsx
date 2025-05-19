import { Routes, Route } from 'react-router-dom'
import { Calificaciones } from '../components/Home/Calificaciones'
import { Tareas } from '../components/Home/Tareas'
import { SubirTareas } from '../components/Home/SubirTareas'
import { Avisos } from '../components/Home/Avisos'
import { LoginA } from '../components/Login/LoginA'
import { ProtectedRoute } from './ProtectedRoute'
import { Layout } from '../components/Layout/Layout'
import { LayoutMaestro } from '../components/Layout/Maestro/LayoutMaestro'
import { Grupos } from '../components/Home/Maestro/Grupos'
import { TareasM } from '../components/Home/Maestro/TareasM'
import { AvisosM } from '../components/Home/Maestro/AvisosM'

export const AppRouter = () => {
  return (
    <Routes>
        {/* Ruta pública */}
        <Route path='/logina' element={<LoginA/>}/>

        {/* Ruta protegida bajo Layout*/}
        <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout/>
          </ProtectedRoute>
        }
        >
          <Route index element={<Calificaciones />} />
          <Route path="tareas" element={<Tareas />} />
          <Route path="subirtareas" element={<SubirTareas />} />
          <Route path="avisos" element={<Avisos />} />
        </Route>

        <Route
        path="/maestro"
        element={
          <ProtectedRoute allowedType="maestro">
            <LayoutMaestro />
          </ProtectedRoute>
        }
      >
        <Route index element={<Grupos/>} />
        <Route path='tareasm' element={<TareasM/>}/>
        <Route path='avisosm' element={<AvisosM/>}/>
        </Route>
       
    </Routes>
  )
}
