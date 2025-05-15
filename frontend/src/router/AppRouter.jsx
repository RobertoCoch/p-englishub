import { Routes, Route } from 'react-router-dom'
import { Calificaciones } from '../components/Home/Calificaciones'
import { Tareas } from '../components/Home/Tareas'
import { SubirTareas } from '../components/Home/SubirTareas'
import { Avisos } from '../components/Home/Avisos'
import { LoginA } from '../components/Login/LoginA'
import { ProtectedRoute } from './ProtectedRoute'
import { Layout } from '../components/Layout/Layout'

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


       
    </Routes>
  )
}
