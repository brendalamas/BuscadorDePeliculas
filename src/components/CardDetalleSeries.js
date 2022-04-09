import { useParams  } from "react-router-dom";
import useFetchDetalles from '../hook/useFetchDetalles';
import CardDetallePersonajesID from "./CardDetallePersonajesID"
import Context from "../context/Context";
import { useContext } from 'react';


const CardDetallePeliculas = () =>{
    const params = useParams() 
    const context = useContext(Context);

    const {detalles: detallesSeries, isLoading} = useFetchDetalles ("tv", `${params.idPersonajesSeries}`, `${context.language}`)    

    return(
        <CardDetallePersonajesID
            detalles={detallesSeries}
            isLoading={isLoading}
        />   
    )     
}

export default CardDetallePeliculas;