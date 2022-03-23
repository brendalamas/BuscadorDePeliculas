import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';

const Buscar = () => {

    const [busqueda, setBusqueda] = useState("");
    const [peliculas, setPeliulas] = useState([])


    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=6e372c30d27676867cdbcfd7e00f4cf2&language=es&query=${busqueda}&page=1`)
        .then(res=>res.json())
        .then(data =>{
            setPeliulas(data.results);
        })
    },[busqueda])

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    const handleOnchange = (e) => {
        console.log(e.target.value);
        setBusqueda(e.target.value)
    }

    return(
        <Container sx={{display:"flex", justifyContent:"center", mt:15}}>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex',width: 400}}
                onClick={handleSubmit}
                >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Busca tu pelicula"
                    inputProps={{ 'aria-label': 'Busca tu pelicula' }}
                    name="valorDelInput"
                    onChange={handleOnchange}
                    // value={valorDelInput}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>        
            </Paper>
            {peliculas.map(pelicula=>(
            <div>{pelicula.title}</div>
            ))}
            
        </Container>


    )
}

export default Buscar;