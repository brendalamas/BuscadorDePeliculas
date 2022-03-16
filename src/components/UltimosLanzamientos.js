import { useState, useEffect } from "react";

import Typography  from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Presentacion from "./Presentacion"



const UltimosLanzamientos = ()=>{
    const [lanzamientos, setLanzamientos] = useState([])

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=6e372c30d27676867cdbcfd7e00f4cf2&language=es-AR&page=1`)
        .then(res=>res.json())
        .then(data=>{
            setLanzamientos(data.results)
            console.log(data.results);
        })
    }, [])

    return(
        <Container sx={{mt:20}}>
            <Typography variant="h4" textAlign="center" color="#FF3B4B" fontWeight="bold" sx={{mb:5}}>
                ULTIMOS LANZAMIENTOS
            </Typography>
            
            <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                {lanzamientos.map((lanzamiento)=>(
                    <Presentacion
                        key={lanzamiento.id}
                        imagen={`https://image.tmdb.org/t/p/original/${lanzamiento.poster_path}`}
                        titulo= {lanzamiento.title}
                        link={lanzamiento.id}
                    />
                ))}
            </Box>
        </Container>
    )
}


export default UltimosLanzamientos;