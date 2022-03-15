import { useState, useEffect } from "react"
import ItemPelicula from "./ItemPelicula";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



const ListaPeliculas = ({titulo, url})=>{
    const [peliculas, setPeliculas] = useState([]);

    useEffect ( () =>{
        fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=6e372c30d27676867cdbcfd7e00f4cf2&language=es-AR&page=1`)
        .then(res => res.json())
        .then(data =>{
            console.log(data.results);
            setPeliculas(data.results);
        })
    },[url])

    return(
      <Container sx={{display:"flex", flexDirection:"column"}}>
        <Box>
            <Typography variant="h5" bgcolor="#1976D2" color="#ffffff" sx={{p:1}}> 
                {titulo}    
            </Typography>

            <Box sx={{p:1}}>
                {peliculas.map(pelicula => (
                    <Box key={pelicula.id}>
                        <ItemPelicula
                            imagen={`https://image.tmdb.org/t/p/w300/${pelicula.backdrop_path}`}
                            titulo={pelicula.title}
                            link={pelicula.id}
                        />
                    </Box>
                ))}
            </Box>

        </Box>

      </Container>
    )
}

export default ListaPeliculas;