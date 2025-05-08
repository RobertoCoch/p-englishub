import { Routes, Route } from 'react-router-dom'
import { Calificaciones } from '../components/Home/Calificaciones'
import { Tareas } from '../components/Home/Tareas'
import { SubirTareas } from '../components/Home/SubirTareas'
import { Avisos } from '../components/Home/Avisos'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Calificaciones/>}/>
        <Route path='/tareas' element={<Tareas/>}/>
        <Route path='/subirtareas' element={<SubirTareas/>}/>
        <Route path='/avisos' element={<Avisos/>}/>
    </Routes>
  )
}
