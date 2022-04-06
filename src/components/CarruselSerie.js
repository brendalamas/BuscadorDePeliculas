import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useFetchPeliculas from "../hook/useFetchPeliculas";

import CarruselTipo from "./CarruselTipo";

const CarruselSerie = () => {
    const {pelicula: principalesSeries} = useFetchPeliculas("popular","tv")

    return(
        <CarruselTipo 
            tipo={principalesSeries}
        />
    )
}

export default CarruselSerie;