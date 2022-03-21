import Typography  from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Presentacion from "./Presentacion"
import useFetchPeliculas from "../hook/useFetchPeliculas";

const Populares = ()=>{
    const populares = useFetchPeliculas ("popular")

    return(
        <Container sx={{mt:20}}>
            <Typography variant="h4" textAlign="center" color="#FF7E88" fontWeight="bold" sx={{mb:5}}>
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