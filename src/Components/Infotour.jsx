import '../Styles/Infotour.css'

import { useParams } from 'react-router-dom'
import { getTour} from './ExtraComponents/DatosTours'
import { useMemo } from 'react'

function Infotour(){  
    
    const params = useParams()

    const tours = useMemo(()=> getTour(params.tourid), [params.tourid])

    return(
        <>
        <div className="contenedor-infotour">
            <div className='contenedor-info'>
                <h2>tourName {tours.tour}</h2>
                <h4 className='descripcion'>{}</h4>
            </div>
            <div className='contenedor-imgs'>
                <h2>Imagenes</h2>
            </div>
        </div>
        </>
    )
}

export default Infotour