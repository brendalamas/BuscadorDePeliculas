import ItemPelicula from "./ItemPelicula";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ListaPeliculas = ({titulo, pelicula, isTv})=>{
    return(
      <Container sx={{display:"flex", flexDirection:"column"}}>
        <Box>
            <Typography variant="h5" bgcolor="#111111" color="#94131d" sx={{p:1}}> 
                {titulo}    
            </Typography>
            <Box sx={{p:1, display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                {pelicula.map(peli => (
                    <Box key={peli.id}>
                        <ItemPelicula
                            imagen={`https://image.tmdb.org/t/p/w300/${peli.backdrop_path}`}
                            titulo={isTv ? peli.name : peli.title}
                            link={pelicula.id}
                        />
                    </Box>
                ))}
            </Box>

        </Box>

      </Container>
    )
}

export default ListaPeliculas;