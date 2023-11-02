import '../Styles/Infotour.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { Link, useParams } from 'react-router-dom'
import { getTour} from './ExtraComponents/DatosTours'
import { useMemo } from 'react'

function Infotour(){  
    
    const params = useParams()

    const tours = useMemo(()=> getTour(params.tourid), [params.tourid])

    return(
        <>
        <div className="contenedor-infotour">
            <div className='contenedor-info'>
                <h2>{tours?.icono}{tours?.tour}</h2>
                <div className='descripcion'>
                    <h4>{tours?.descripcion}</h4>
                </div>
            </div>
            <div className='contenedor-imgs'>
                <img className='imgInfoTours' src={require(`../Imgs/${tours?.src1}.jpg`)} alt={`imagen ${tours?.src1}`}/>
                <img className='imgInfoTours' src={require(`../Imgs/${tours?.src1}.jpg`)} alt={`imagen ${tours?.src1}`}/>
                <img className='imgInfoTours' src={require(`../Imgs/${tours?.src1}.jpg`)} alt={`imagen ${tours?.src1}`}/>
            </div>
        </div>
        <Link to={'https://walink.co/3289b3'} className='contacto'>
            <h5>Contactanos por este Tour</h5><WhatsAppIcon sx={{color: 'white'}}/>     
        </Link>
        </>
    )
}

export default Infotour