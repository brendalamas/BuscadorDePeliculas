import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import PeliculaDetallesCategoria from "./PeliculaDetallesCategoria"

const PeliculaCategoriaCard = ({peliculas, titulo}) => {
    return (
        <Container sx={{display:"flex", flexDirection:"column"}}>
            <Typography variant="h6"> {titulo}</Typography>

            <Box sx={{display:"flex", flexWrap:"wrap"}}>
                {peliculas.map(pelicula=>(
                    <Box key={pelicula.id}>
                        <PeliculaDetallesCategoria
                            imagen={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
                            titulo= {pelicula.title}
                            link={pelicula.id}
                        />
                    </Box>   
                ))}
            </Box>
            
        </Container>
        
    )
}
export default PeliculaCategoriaCard;