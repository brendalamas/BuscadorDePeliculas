import {Link} from 'react-router-dom';
import ItemPelicula from "./ItemPelicula";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import imagenNotFount from "../img/notFound.png"
import CircularProgress from '@mui/material/CircularProgress';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ListaPeliculas = ({titulo, pelicula, isLoading, categoria})=>{
    return(
      <Container sx={{display:"flex", flexDirection:"column"}}>
        {isLoading && <CircularProgress sx={{color:"black", fontSize:1000}}/>}
        <Box>
            <Box bgcolor="#111111" sx={{mt:3, mb:3, p:1, display:"flex", alignItems:"center"}}>
                <Typography variant="h5" bgcolor="#111111" color="#94131d" sx={{p:1}}> 
                    {titulo}    
                </Typography>
                <Link to={`/peliculacategoria/${categoria}`} style={{textDecoration:"none"}}>
                    <ArrowForwardIcon sx={{color:"#94131d", ml:2, mt:0.5}}/>
                </Link>
            </Box>
            <Box sx={{p:1, display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                {pelicula.map(peli => (
                    <Box key={peli.id}>
                        <ItemPelicula
                            imagen={peli.poster_path ? `https://image.tmdb.org/t/p/w300/${peli.poster_path}`
                            : imagenNotFount}
                            titulo={peli.name? peli.name : peli.title}
                            link={peli.id}
                        />
                    </Box>
                ))}
            </Box>

        </Box>

      </Container>
    )
}

export default ListaPeliculas;