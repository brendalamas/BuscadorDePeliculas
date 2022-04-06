import { useParams  } from "react-router-dom";
import useFetchDetalles from '../hook/useFetchDetalles';
import CardDetallePersonajesID from "./CardDetallePersonajesID"

const CardDetallePersonajes = () =>{
    const params = useParams() 

    const {detalles: detallesPeliculas} = useFetchDetalles ("movie", `${params.idPersonajes}`)    
    // const {detalles: detallesSeries} = useFetchDetalles ("tv", `${params.idPersonajes}`)    


    return(
        <>
        <CardDetallePersonajesID
            detalles={detallesPeliculas}
        />   
        {/* <CardDetallePersonajesID
            detalles={detallesSeries}
        />   */}
        </>      
    )     
}

export default CardDetallePersonajes;