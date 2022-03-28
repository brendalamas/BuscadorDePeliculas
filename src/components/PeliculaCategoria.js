import useFetchPeliculas from "../hook/useFetchPeliculas";
import Container from '@mui/material/Container';
import PeliculaCategoriaCard from "./PeliculaCategoriaCard"

const PeliculaCategoria = () => {

    const { pelicula: peliculasPopulares } = useFetchPeliculas('popular', 'movie');
    const { pelicula: peliculasMejorCriticas } = useFetchPeliculas('top_rated', 'movie');
    const { pelicula: peliculasAEstrenarse } = useFetchPeliculas('upcoming', 'movie');

    return (
        <Container sx={{display:"flex", flexWrap:"wrap", mt:20, justifyContent:"center"}}>
            <PeliculaCategoriaCard 
                peliculas={peliculasPopulares}
                titulo="Peliculas populares"
            />
            <PeliculaCategoriaCard 
                peliculas={peliculasMejorCriticas}
                titulo="Peliculas con mejores criticas"
            />
            <PeliculaCategoriaCard 
                peliculas={peliculasAEstrenarse}
                titulo="Peliculas a estrenarse"
            />
        </Container>
    )
}


export default PeliculaCategoria;