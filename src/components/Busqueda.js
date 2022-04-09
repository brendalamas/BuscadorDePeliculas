import { useEffect, useState, useContext } from 'react';
import {useSearchParams} from "react-router-dom";
import { apiKey, urlBase } from '../utils/variables';

import Box from '@mui/material/Box';
import Context from "../context/Context";
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import BusquedaCard from './BusquedaCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import notFound from "../img/notFound.png";
import {titulosExtras} from "../utils/titulos";
import ErrorNoEncontrado from "./ErrorNoEncontrado";



const Busqueda = () => {
    const context = useContext(Context);
    const [personajes, setPersonajes] = useState([])
    const [busqueda, setBusqueda] = useState([])
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const [searchParams, setSearchParams] = useSearchParams({
        query:""
    })
        
    useEffect(()=>{
        fetch (`${urlBase}search/multi?${apiKey}&language=${context.language}&query=${busqueda}&page=${page}`)
        .then(res => res.json())
        .then(data => {
            setPersonajes(data.results)
            setTotalPage(data.total_pages)
        })
    },[busqueda, context.language, page])

    const handleSubmit = (e) => {
        e.preventDefault()
        personajes === "" && <ErrorNoEncontrado/>
        console.log(personajes)
    }        

    
    const handleChangeInput = (e) => {
        setSearchParams({
            query: e.target.value
        })
    }
    
    const handleClick = () => {
        setBusqueda(searchParams.get("query"))

    }

    const handleChange = (event, value) => {
        setPage(value);
    };

    return(
        <Container sx={{display:"flex", flexDirection:"column", alignItems:"center", mt:20}}>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', width: 400}}
                onClick={handleSubmit}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder= {titulosExtras[context.language].busqueda}
                    inputProps={{ 'aria-label': `${titulosExtras[context.language].busqueda}` }}
                    onChange={handleChangeInput}
                    value={searchParams.get("query")}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search"  onClick={handleClick}>
                    <SearchIcon/>
                </IconButton>        
            </Paper>

            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", mt:5}}>
                <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                    {personajes && personajes.map((personaje)=>(
                        <BusquedaCard
                            imagen= {
                                personaje.poster_path ?
                                `https://image.tmdb.org/t/p/original/${personaje.poster_path}` 
                                : notFound
                            }
                            titulo= {personaje.title ? personaje.title : personaje.name}
                            id= {personaje.id}
                            tipo= {personaje.media_type}    
                        />
                    ))}
                </Box>
                <Box sx={{m:4, bgcolor:"#1565C0", borderRadius:2}}>
                    <Stack spacing={2}>
                        <Pagination count={totalPage > 500 ? 500 : totalPage} page={page} 
                        onChange={handleChange} color="primary"
                        />
                    </Stack>
                </Box>
            </Box>
            
        </Container>


    )
}

export default Busqueda;