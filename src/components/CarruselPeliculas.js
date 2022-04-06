import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useFetchPeliculas from "../hook/useFetchPeliculas";

import CarruselTipo from "./CarruselTipo";

const CarruselPeliculas = () => {
    const {pelicula: principales} = useFetchPeliculas("now_playing","movie")
    return(
        <CarruselTipo 
            tipo= {principales}
        />
    )
}

export default CarruselPeliculas;