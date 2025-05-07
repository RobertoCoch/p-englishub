import { Routes, Route } from 'react-router-dom'
import { Calificaciones } from '../components/Home/Calificaciones'
import { Tareas } from '../components/Home/Tareas'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Calificaciones/>}/>
        <Route path='/tareas' element={<Tareas/>}/>
    </Routes>
  )
}
