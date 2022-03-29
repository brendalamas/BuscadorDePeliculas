import useFetchPeliculas from "../hook/useFetchPeliculas";
import Container from '@mui/material/Container';
import PeliculaCategoriaCard from "./PeliculaCategoriaCard"
import { useParams  } from "react-router-dom";

const PeliculaCategoria = () => {

    const params = useParams() 

    const {pelicula} = useFetchPeliculas(`${params.idDetalle}`, 'movie');

    const definirTitulo = () =>{
        if (params.idDetalle === "popular") {
            return "Peliculas Populares"
        }else if (params.idDetalle === "top_rated"){
            return "Peliculas con mejores criticas"
        }else{
            return "Peliculas a estrenarse"
        }
    }
    return (
        <Container sx={{display:"flex", flexWrap:"wrap", mt:20, justifyContent:"center"}}>
            <PeliculaCategoriaCard 
                peliculas={pelicula}
                titulos= {definirTitulo()}
            />
        </Container>
    )
}


export default PeliculaCategoria;