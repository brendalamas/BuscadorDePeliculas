import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const CardDetallePelicula = () => {
    const params = useParams() 
    const [pelicula, setPelicula] = useState([])

    console.log(params.idPelicula)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.idPelicula}?api_key=6e372c30d27676867cdbcfd7e00f4cf2&language=es-AR`)
        .then(res => res.json())
        .then(data => setPelicula(data))
    }, [params.idPelicula])

    console.log(pelicula)

    return (
        <Container sx={{mt:25}}>
            <Box>
                <img src={`https://image.tmdb.org/t/p/w300/${pelicula.backdrop_path}`} alt="portada"/>
            </Box>
            <CardContent>
                <Typography>{pelicula.title}</Typography>
                <Typography>{pelicula.overview}</Typography>
            </CardContent>
        </Container>
    )
}

export default CardDetallePelicula;