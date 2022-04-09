import { useParams  } from "react-router-dom";
import { useContext, useState } from 'react';
import Context from "../context/Context";
import useFetchPeliculas from "../hook/useFetchPeliculas";
import Container from '@mui/material/Container';
import CardCategoria from "./CardCategoria"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


const SerieCategoria = () => {
    const context = useContext(Context);
    const params = useParams() 

    const [page, setPage] = useState(1);
    const {pelicula : serie, totalPage} = useFetchPeliculas(`${params.idSerie}`, 'tv', `${context.language}`, page);
    
    const definirTituloSerie = () =>{
        if (params.idSerie === "popular") {
            return "Series Populares"
        }else if (params.idSerie === "top_rated"){
            return "Series con mejores criticas"
        }else{
            return "Series a estrenarse"
        }
    }

    const handleChange = (event, value) => {
      setPage(value);
    };

    return (
        <Container sx={{display:"flex", flexWrap:"wrap", mt:20, justifyContent:"center"}}>
            <CardCategoria 
                peliculas={serie}
                titulos= {definirTituloSerie()}
                isTV={true}
            />
            <Box sx={{m:4, bgcolor:"#1565C0", borderRadius:2}}>
                <Stack spacing={2}>
                    <Pagination count={totalPage > 500 ? 500 : totalPage} 
                    page={page} onChange={handleChange} color="primary"
                    />
                </Stack>
            </Box>
        </Container>
    )
}


export default SerieCategoria;
;