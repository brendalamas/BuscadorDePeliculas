import Typography  from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Presentacion from "./Presentacion"
import useFetchPeliculas from "../hook/useFetchPeliculas";

const UltimosLanzamientos = ()=>{
    const lanzamientos = useFetchPeliculas("upcoming")

    return(
        <Container sx={{mt:20}}>
            <Typography variant="h4" textAlign="center" color="#FF7E88" fontWeight="bold" sx={{mb:5}}>
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