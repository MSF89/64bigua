import { Outlet } from "react-router-dom"
import Head from "./Components/Head"
import './App.css'

export default function Layout(){
    return (
        <div className='App'>
      <div className='contenedor-principal'>
        <Head/>
        <Outlet/>    
      </div>
    </div>
    )
}