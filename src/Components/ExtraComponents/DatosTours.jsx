import PanoramaIcon from '@mui/icons-material/Panorama';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import LandscapeIcon from '@mui/icons-material/Landscape';

export const DatosTours = [
    
    {
        id: "1",
        imagen: 'pasarelas',
        icono: <DirectionsBoatIcon/>,
        tour: "'Glaciares'",
        duracion: "' 1 Hora'",
        precio: "' $25000'",
        salidas: "' 09hs/12hs'",
        descripcion: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima consequatur alias tempora ipsa atque voluptatibus ducimus, praesentium officiis quod iusto mollitia ex esse et ad voluptates animi illum perferendis?</p>'
    },
    {
        id: '2',
        imagen: 'pasarelas',
        icono: <PanoramaIcon/>,
        tour: 'Pasarelas',
        duracion: ' 1 Hora',
        precio: ' $25000',
        salidas: ' 09hs/12hs'
    },
    {
        id: '3',
        imagen: 'pasarelas',
        icono: <AirportShuttleIcon/>,
        tour: 'Nativo',
        duracion: ' 1 Hora',
        precio: ' $25000',
        salidas: ' 09hs/12hs'
    },
    {
        id: '4',
        imagen: 'pasarelas',
        icono: <LandscapeIcon/>,
        tour: 'Cabalgata',
        duracion: ' 1 Hora',
        precio: ' $25000',
        salidas: ' 09hs/12hs'
    }

]

export function getTour(id) {
    return DatosTours.find((DatosTour) => DatosTour.id === id)
}