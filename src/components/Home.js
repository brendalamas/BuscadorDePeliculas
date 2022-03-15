import Container from '@mui/material/Container';
import ListaPeliculas from "./ListaPeliculas";

const Home = ()=>{
    return(
        <Container sx={{mt:15, display:"flex"}}>
            <ListaPeliculas titulo="Peliculas Populares" url="popular"/>
            <ListaPeliculas titulo="Peliculas Mejor Puntuadas" url="top_rated"/>
        </Container>
    )
}

export default Home;