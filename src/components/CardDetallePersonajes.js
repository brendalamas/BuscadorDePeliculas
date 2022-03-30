import { useParams  } from "react-router-dom";
import useFetchPeliculas from "../hook/useFetchPeliculas";

const CardDetallePersonajes = () =>{
    const params = useParams() 
    console.log(params);

    const {pelicula} = useFetchPeliculas(`${params.idPersonajes}`, 'movie');

    console.log(pelicula)

    return (
        <div> hola </div>
    )
}

export default CardDetallePersonajes;