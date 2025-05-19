import { Outlet } from 'react-router-dom'
import { NavbarM } from './NavbarM'
import { SidebarM } from './SidebarM'

export const LayoutMaestro = () => {
  return (
     <div className="w-screen h-screen flex">
            <SidebarM></SidebarM>
            <div className="flex flex-col lg:w-8/10 w-screen">
                <NavbarM></NavbarM>
                <main>
                    <Outlet></Outlet>
                </main>
            </div>
    </div>
  )
}