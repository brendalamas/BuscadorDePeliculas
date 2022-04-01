import { useSearchParams } from "react-router-dom"
import useFetchPeliculas from "../hook/useFetchPeliculas"


const CardDetallePersonajes = () =>{
    const {peliculas} = useFetchPeliculas()
    return (
        <div> hola </div>
    )
}

export default CardDetallePersonajes;