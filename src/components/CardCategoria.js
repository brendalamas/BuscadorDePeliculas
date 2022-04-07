import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardCategoriaDetalle from "./CardCategoriaDetalle";
import notFound from "../img/notFound.png"

const CardCategoria = ({peliculas, titulos, isTV}) => {
    return (
        <Container sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Typography variant="h4" fontWeight="bold" bgcolor="#111111" color="#94131d" sx={{p:1, mb:5}}> 
                {titulos} 
            </Typography>
            <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                {peliculas && peliculas.map(pelicula=>(
                    <CardCategoriaDetalle
                        imagen= {pelicula.poster_path ? 
                            `https://image.tmdb.org/t/p/original/${pelicula.poster_path}`
                            : notFound
                        }
                        titulo={pelicula.title? pelicula.title:pelicula.name}
                        isTV={isTV}
                        id={pelicula.id}                            
                    />
                ))}
            </Box>
            
            
            
        </Container>
        
        
    )
}
export default CardCategoria;