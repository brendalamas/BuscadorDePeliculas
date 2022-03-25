import Typography  from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Presentacion from "./Presentacion"
import useFetchPeliculas from "../hook/useFetchPeliculas";
import { cortarArrayPeliculas } from "../utils/variables";

const Peliculas = ()=>{
    const { pelicula: peliculas } = useFetchPeliculas('popular', 'movie');

    console.log(peliculas)
    return(
        <Container sx={{mt:20}}>
            <Typography variant="h4" textAlign="center" color="#FF7E88" fontWeight="bold" sx={{mb:5}}>
                PELICULAS POPULARES
            </Typography>
            
            <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                {cortarArrayPeliculas(peliculas).map((pelicula)=>(
                    <Presentacion
                        key={pelicula.id}
                        imagen={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
                        titulo= {pelicula.title}
                        link={pelicula.id}
                    />
                ))}
            </Box>
        </Container>
    )
}


export default Peliculas;