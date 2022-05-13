import { useParams  } from "react-router-dom";
import { useContext, useState} from 'react';
import Context from "../context/Context";
import useFetchPeliculas from "../hook/useFetchPeliculas";
import Container from '@mui/material/Container';
import CardCategoria from "./CardCategoria"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const PeliculaCategoria = () => {
    const context = useContext(Context);
    const params = useParams() 

    const [page, setPage] = useState(1);
    const {pelicula, totalPage} = useFetchPeliculas(`${params.idDetalle}`, 'movie', `${context.language}`, page);

    const definirTitulo = () =>{
        // en serie categoria tenes un if similar: pensa como hacer una funcion auxiliar compartida
        // que te resuelva esta logica para ambos componentes!
        if (params.idDetalle === "popular") {
            return "Peliculas Populares"
        }else if (params.idDetalle === "top_rated"){
            return "Peliculas con mejores criticas"
        }else{
            return "Peliculas a estrenarse"
        }
    }

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Container sx={{display:"flex", flexWrap:"wrap", mt:20, justifyContent:"center"}}>
            <CardCategoria 
                peliculas={pelicula}
                titulos= {definirTitulo()}
                isTV={false}
            />
            <Box sx={{m:4}}>
                <Stack spacing={2}>
                    <Pagination count={totalPage > 500 ? 500 : totalPage} page={page} onChange={handleChange} />
                </Stack>
            </Box>
        </Container>
    )
}


export default PeliculaCategoria;