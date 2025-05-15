import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Sidebar } from "./Sidebar"

export const Layout = () => {
  return (
    <div className="w-screen h-screen flex">
        <Sidebar></Sidebar>
        <div className="flex flex-col lg:w-8/10 w-screen">
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    </div>
  )
}
