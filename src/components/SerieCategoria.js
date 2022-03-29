import useFetchPeliculas from "../hook/useFetchPeliculas";
import Container from '@mui/material/Container';
import PeliculaCategoriaCard from "./PeliculaCategoriaCard"
import { useParams  } from "react-router-dom";

const SerieCategoria = () => {
    const params = useParams() 
    console.log(params.idSerie)

    const {pelicula : serie} = useFetchPeliculas(`${params.idSerie}`, 'tv');

    console.log(serie)
    
    const definirTituloSerie = () =>{
        if (params.idSerie === "popular") {
            return "Series Populares"
        }else if (params.idSerie === "top_rated"){
            return "Series con mejores criticas"
        }else{
            return "Series a estrenarse"
        }
    }
    return (
        <Container sx={{display:"flex", flexWrap:"wrap", mt:20, justifyContent:"center"}}>
            <PeliculaCategoriaCard 
                peliculas={serie}
                titulos= {definirTituloSerie()}
            />
        </Container>
    )
}


export default SerieCategoria;
;