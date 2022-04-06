import { useParams  } from "react-router-dom";
import useFetchDetalles from '../hook/useFetchDetalles';
import CardDetallePersonajesID from "./CardDetallePersonajesID"

const CardDetallePeliculas = () =>{
    const params = useParams() 

    const {detalles: detallesPeliculas} = useFetchDetalles ("movie", `${params.idPersonajesPeliculas}`)    


    return(
        <CardDetallePersonajesID
            detalles={detallesPeliculas}
        />   
    )     
}

export default CardDetallePeliculas;