import { useState, useEffect } from "react";

import Typography  from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Presentacion from "./Presentacion"


const Populares = ()=>{
    const [populares, setPopulares] = useState([])

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6e372c30d27676867cdbcfd7e00f4cf2&language=es-AR&page=1`)
        .then(res=>res.json())
        .then(data=>{
            setPopulares(data.results)
        })
    }, [])

    return(
        <Container sx={{mt:20}}>
            <Typography variant="h4" textAlign="center" color="#FF3B4B" fontWeight="bold" sx={{mb:5}}>
                POPULARES
            </Typography>
            <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                {populares.map((popular)=>(
                    <Presentacion
                        key={popular.id}
                        imagen={`https://image.tmdb.org/t/p/original/${popular.poster_path}`}
                        titulo= {popular.title}
                        link={popular.id}
                    />
                ))}
            </Box>

        </Container>
    )
}

export default Populares;