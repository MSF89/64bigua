
import { Link } from 'react-router-dom'
import '../Styles/Tours.css'
import { DatosTours } from './ExtraComponents/DatosTours'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';



function Tour(){
    
    return(
        <>
            <div className='cont-infoPrecio' ><h4 className='infoPrecio'>Precio sujeto a modificaciones <ErrorOutlineIcon/></h4></div>
            { DatosTours.map(({imagen, tour, duracion, precio, salidas, icono, id}) => (
            <Link to={`/${id}`} className='link' key={id}>
                <div  className="contenedor-tours"> 
                    <div className='contenedor-img'>
                        <img className='img' src={require(`../Imgs/${imagen}.jpg`)}   alt={`imagen ${imagen}`} />          
                    </div>           
                    <div className='contenedor-info-tour'>
                        <p  className="contenedor-nombre-tour">{icono}{tour}</p>
                        <div className="contenedor-descripcion">
                            <p >Duracion:{duracion}</p>
                            <p >Salidas:{salidas}</p>
                            <p >Precio: A Consultar</p>
                        </div>
                    </div>
                </div>          
           </Link>
           )) }
        </>
    )
}

export default Tour

