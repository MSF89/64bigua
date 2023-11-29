import '../Styles/Infotour.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GTranslateIcon from '@mui/icons-material/GTranslate';

import { Link, useParams } from 'react-router-dom'
import { getTour} from './ExtraComponents/DatosTours'
import { useMemo, useState } from 'react'

function Infotour(){  
    
    const params = useParams()

    const tours = useMemo(()=> getTour(params.tourid), [params.tourid])

    const [desc, setDesc] = useState(true)

    return(
        <>
        <div className="contenedor-infotour">
            <div className='contenedor-info'>
                <h2 className='contenedor-nombre-infoTour'>{tours?.icono}{tours?.tour}</h2>
                <div className='descripcion'>
                    <div className='descripcion-inc'>
                        <h3>Este Tour incluye: </h3>
                        <h3>{tours?.incluye}</h3> 
                    </div>
                    <h4>{desc ? tours?.spanishDesc : tours?.englishDesc}</h4>
                    <h5 className='trans-button' onClick={()=>{ setDesc(!desc)}}>
                        <GTranslateIcon sx={{color: 'black', fontSize: 15}} />{ desc ? "English" : "Español"}</h5>
                </div>
            </div>
            <div className='contenedor-imgs'>
                <img className='imgInfoTours' src={require(`../Imgs/${tours?.src1}.jpg`)} alt={`imagen ${tours?.src1}`}/>
                <img className='imgInfoTours' src={require(`../Imgs/${tours?.src2}.jpg`)} alt={`imagen ${tours?.src2}`}/>
                <img className='imgInfoTours' src={require(`../Imgs/${tours?.src3}.jpg`)} alt={`imagen ${tours?.src3}`}/>
            </div>
        </div>
        <Link to={tours?.link} className='contacto' target='blank'>
            <h5>Contactanos por {tours?.tour} Tour</h5><WhatsAppIcon sx={{color: 'white'}}/>     
        </Link>
        </>
    )
}

export default Infotour