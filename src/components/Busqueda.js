import { useEffect, useState } from 'react';
import {useSearchParams} from "react-router-dom";
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import BusquedaCard from './BusquedaCard';
import Typography from '@mui/material/Typography';


const Busqueda = () => {

    const [searchParams, setSearchParams] = useSearchParams({
        query:""
    })

    const [personajes, setPersonajes] = useState([])
    const [busqueda, setBusqueda] = useState([])

    

    useEffect(()=>{
        fetch (`https://api.themoviedb.org/3/search/multi?api_key=6e372c30d27676867cdbcfd7e00f4cf2&language=en-ES&query=${busqueda}`)
        .then(res => res.json())
        .then(data => {
            setPersonajes(data.results)
        })
    },[busqueda])

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    const handleChange = (e) => {
        setSearchParams({
            query: e.target.value
        })
    }
    
    const handleClick = () => {
        setBusqueda(searchParams.get("query"))
    }
    console.log(personajes)
    return(
        <Container sx={{display:"flex", flexDirection:"column", alignItems:"center", mt:15}}>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', width: 400}}
                onClick={handleSubmit}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Busca tu pelicula"
                    inputProps={{ 'aria-label': 'Busca tu pelicula' }}
                    onChange={handleChange}
                    value={searchParams.get("query")}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search"  onClick={handleClick}>
                    <SearchIcon/>
                </IconButton>        
            </Paper>

            <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center", mt:5}}>
                {personajes && personajes.map((personaje)=>(
                    <BusquedaCard
                        imagen={`https://image.tmdb.org/t/p/original/${personaje.poster_path}`}
                        titulo={personaje.title ? personaje.title : personaje.name}
                        id={personaje.id}
                        tipo={personaje.media_type}    
                    />
                ))}
            </Box>
            
        </Container>


    )
}

export default Busqueda;