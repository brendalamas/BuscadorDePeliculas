import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const CardDetallePelicula = () => {
    const params = useParams() 
    const [pelicula, setPelicula] = useState([])

    console.log(params.idPelicula)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.idPelicula}?api_key=6e372c30d27676867cdbcfd7e00f4cf2&language=es`)
        .then(res => res.json())
        .then(data => setPelicula(data))
    }, [params.idPelicula])

    console.log(pelicula)

    return (
        <Box sx={{mt:25, display:"flex", justifyContent:"center", p:0, height:700, width:1000, bgcolor:"#111111"}}>
            <Box sx={{
                backgroundImage: "url(" + `https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}`  + ")",
                backgroundPosition:"center",
                backgroundSize: "cover",
                display:"flex",
                alignItems:"center",
                opacity:0.5
            }}>
                <CardContent sx={{display:"flex"}}>
                    <img src={`https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}`} 
                    alt={pelicula.backdrop_path} 
                    width={450} 
                    />
                    <Box sx={{display:"flex", flexDirection:"column", textAlign:"center", p:4}}>
                        <Typography color="#FFFFFF" fontWeight="bold">{pelicula.title}</Typography>
                        <Typography color="#FFFFFF" >{pelicula.overview}</Typography>
                    </Box>
                    
                </CardContent>
            </Box>
        </Box>
    )
}

export default CardDetallePelicula;