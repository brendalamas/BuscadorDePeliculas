import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useFetchPeliculas from "../hook/useFetchPeliculas";
import CarruselTipo from "./CarruselTipo";
import Context from "../context/Context";
import { useContext } from 'react';


const CarruselPeliculas = () => {
    const context = useContext(Context);
    const {pelicula: principales, tipoLanguage} = useFetchPeliculas("now_playing","movie", `${context.language}`)

    return(
        <CarruselTipo 
            tipo= {principales}
            isTV={false}
        />
    )
}

export default CarruselPeliculas;