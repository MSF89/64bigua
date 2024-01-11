
import { Link } from 'react-router-dom'
import '../Styles/Tours.css'
import { DatosTours } from './ExtraComponents/DatosTours'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';



function Tour(){
    
    return(
        <>
            <div className='cont-infoPrecio' ><h4 className='infoPrecio'>Precio sujeto a modificaciones <ErrorOutlineIcon/></h4></div>
            <Link to="/terminalservice" className='link'>
                <div className='contenedor-tours'>
                    <div className='contenedor-img'>
                        <img className='img' src={require(`../Imgs/terminalCalafate.jpg`)}   alt={`imagen terminal`} />          
                    </div>
                    <div className='contenedor-info-tour'>
                            <DirectionsBusIcon sx={{fontSize:50}}/>
                        <div className="contenedor-descripcion">
                            <p  className="">Bus Terminal Service</p>
                            <p  className="">Servicio Terminal Buses</p>
                        </div>
                    </div>
                </div>
            </Link>
            { DatosTours.map(({imagen, tour, duracion, salidas, icono, id}) => (
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
                            <p >Precio: Consultar</p>
                        </div>
                    </div>
                </div>          
           </Link>
           )) }
        </>
    )
}

export default Tour

