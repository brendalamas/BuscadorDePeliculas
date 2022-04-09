import { useParams  } from "react-router-dom";
import useFetchDetalles from '../hook/useFetchDetalles';
import CardDetallePersonajesID from "./CardDetallePersonajesID"
import Context from "../context/Context";
import { useContext } from 'react';

const CardDetallePeliculas = () =>{
    const params = useParams() 
    const context = useContext(Context);

    const {detalles: detallesPeliculas, isLoading} = useFetchDetalles ("movie", `${params.idPersonajesPeliculas}`,`${context.language}`)    


    return(
        <CardDetallePersonajesID
            detalles={detallesPeliculas}
            isLoading={isLoading}
        />   
    )     
}

export default CardDetallePeliculas;