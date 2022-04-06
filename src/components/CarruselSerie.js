import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useFetchPeliculas from "../hook/useFetchPeliculas";
import CarruselTipo from "./CarruselTipo";
import Context from "../context/Context";
import { useContext } from 'react';

const CarruselSerie = () => {
    const context = useContext(Context);
    const {pelicula: principalesSeries, tipoLanguage} = useFetchPeliculas("popular","tv", `${context.language}`)

    return(
        <CarruselTipo 
            tipo={principalesSeries}
            isTV={true}
        />
    )
}

export default CarruselSerie;