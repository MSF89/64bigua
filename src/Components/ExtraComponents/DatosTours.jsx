import PanoramaIcon from '@mui/icons-material/Panorama';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import LandscapeIcon from '@mui/icons-material/Landscape';

export const DatosTours = [
    
    {
        id: "kayak",
        imagen: 'pasarelas',
        icono: <DirectionsBoatIcon/>,
        tour: "Kayak",
        duracion: "1 Hora",
        precio: "$25000",
        salidas: "09hs/12h",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, neque? Corporis at incidunt, libero eum cupiditate molestias velit adipisci saepe iure in maxime? Rem enim mollitia perspiciatis sint totam! Illo? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, neque? Corporis at incidunt, libero eum cupiditate molestias velit adipisci saepe iure in maxime? Rem enim mollitia perspiciatis sint totam! Illo? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, neque? Corporis at incidunt, libero eum cupiditate molestias velit adipisci saepe iure in maxime? Rem enim mollitia perspiciatis sint totam! Illo?",
        src1: "kayak1",
        src2: "kayak2",
        src3: "kayak3",
        },
    {
        id: 'pasarelas',
        imagen: 'pasarelas',
        icono: <PanoramaIcon/>,
        tour: 'Pasarelas',
        duracion: ' 1 Hora',
        precio: ' $25000',
        salidas: ' 09hs/12hs',
        src1: "kayak1",
        src2: "kayak2",
        src3: "kayak3",
    },
    {
        id: 'nativo',
        imagen: 'pasarelas',
        icono: <AirportShuttleIcon/>,
        tour: 'Nativo',
        duracion: ' 1 Hora',
        precio: ' $25000',
        salidas: ' 09hs/12hs',
        src1: "kayak1",
        src2: "kayak2",
        src3: "kayak3",
    },
    {
        id: 'cabalgata',
        imagen: 'pasarelas',
        icono: <LandscapeIcon/>,
        tour: 'Cabalgata',
        duracion: ' 1 Hora',
        precio: ' $25000',
        salidas: ' 09hs/12hs',
        src1: "kayak1",
        src2: "kayak2",
        src3: "kayak3",
    }

]

export function getTour(id) {
    return DatosTours.find((DatosTour) => DatosTour.id === id)
}