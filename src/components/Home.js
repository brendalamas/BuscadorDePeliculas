import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import ListaPeliculas from "./ListaPeliculas";
import Carrusel from './Carrusel';

const Home = ()=>{
    return(
        <Container sx={{mt:15, display:"flex", flexDirection:"column"}}>
            <Carrusel/>
            <Box sx={{display:"flex", mt:8}}>
                <ListaPeliculas 
                titulo="Peliculas Populares" 
                url="popular"
                />
                <ListaPeliculas 
                titulo="Peliculas Mejor Puntuadas" 
                url="top_rated"
                />
            </Box>
        </Container>
    )
}

export default Home;