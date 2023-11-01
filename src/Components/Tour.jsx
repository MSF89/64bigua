
import { Link } from 'react-router-dom'
import '../Styles/Tours.css'
import { DatosTours } from './ExtraComponents/DatosTours'



function Tour(){
    
    return(
        <>
        <Link to={`/tours/${DatosTours.id}`} className='link'>
            { DatosTours.map(({imagen, tour, duracion, precio, salidas, icono}, id) => (
                
                <div key={id} className="contenedor-tours"> 
                    <div className='contenedor-img'>
                        <img className='img' src={require(`../Imgs/${imagen}.jpg`)}   alt={`imagen ${imagen}`} />          
                    </div>           
                    <div className='contenedor-info-tour'>
                        <p  className="contenedor-nombre-tour">{icono}{tour}</p>
                        <div className="contenedor-descripcion">
                            <p >Duracion:{duracion}</p>
                            <p >Salidas:{salidas}</p>
                            <p >Precio:{precio}</p>
                        </div>
                    </div>
                </div>            
           )) }
           </Link>
        </>
    )
}

export default Tour

