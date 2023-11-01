import '../Styles/Head.css'
import logo from '../Imgs/Logo.svg'
import { Link } from 'react-router-dom'
export default function Head(){
    return(
        <Link to={'/'} className='link'>
            <div className="contenedor-principal-head">
                <div className="titulos-head">
                    <h1>Excursiones</h1>
                    <h2>Tours</h2>
                </div>
                <img className="imagen-head" src= {logo} alt="logo64bigua" />
            </div>
        </Link>
    )
}