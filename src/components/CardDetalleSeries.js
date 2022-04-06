import { useParams  } from "react-router-dom";
import useFetchDetalles from '../hook/useFetchDetalles';
import CardDetallePersonajesID from "./CardDetallePersonajesID"

const CardDetallePeliculas = () =>{
    const params = useParams() 
    const {detalles: detallesSeries} = useFetchDetalles ("tv", `${params.idPersonajesSeries}`)    

    return(
        <CardDetallePersonajesID
            detalles={detallesSeries}
        />   
    )     
}

export default CardDetallePeliculas;