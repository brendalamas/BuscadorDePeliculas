import {Link} from 'react-router-dom';
import Typography  from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Presentacion from "./Presentacion"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PeliculasSecciones = ({peliculasSlice, titulo, categoria}) => {
    return (
        <Container>
            <Box bgcolor="#111111" sx={{mt:3, mb:3, p:1, display:"flex", alignItems:"center"}}>
                <Typography variant="h6" fontWeight="bold" color="#94131d">
                    {titulo}
                </Typography>
                <Link to={`/peliculacategoria/${categoria}`} style={{textDecoration:"none"}}>
                    <ArrowForwardIcon sx={{color:"#94131d", ml:2, mt:0.5}}/>
                </Link>
            </Box>            
            <Box sx={{display:"flex", justifyContent:"center", mt:3, mb:3}}>
                {peliculasSlice.map((pelicula)=>(
                    <Box key={pelicula.id}>
                        <Presentacion
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
export default PeliculasSecciones;