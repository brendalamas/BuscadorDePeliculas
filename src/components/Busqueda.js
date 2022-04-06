import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {useSearchParams} from "react-router-dom";

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import imagenNotFount from "../img/notFound.png";


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
                    <Card sx={{bgcolor:"transparent", m:1, width:300}} key={personaje.id}>
                    <Link to={`/carddetallepersonajes/${personaje.id}`} style={{textDecoration:"none"}}>
                        <Box sx={{display:"flex"}}>
                            <CardMedia sx={{width:300}}
                            component="img"
                            image = {personaje.poster_path ?
                                `https://image.tmdb.org/t/p/original/${personaje.poster_path}`
                                : imagenNotFount
                            }
                            alt={personaje.title}
                            />
                        </Box>
                        <Typography  sx={{p:3}}
                        variant="subtitle1" 
                        fontWeight= "bold" 
                        textAlign="center" 
                        color="#000000"
                        >
                            {personaje.title ? personaje.title : personaje.name}
                        </Typography>
                    </Link>
                    </Card>
                ))}
            </Box>
            
        </Container>


    )
}

export default Busqueda;