import {Link} from 'react-router-dom';
import Typography  from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Presentacion from "./Presentacion"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const SeriesSecciones = ({seriesSlice, titulo, categoria}) => {
    return (
        <Container>
            <Box bgcolor="#111111" sx={{mt:3, mb:3, p:1, display:"flex", alignItems:"center"}}>
                <Typography variant="h6" fontWeight="bold" color="#94131d">
                    {titulo}
                </Typography>
                <Link to={`/seriecategoria/${categoria}`} style={{textDecoration:"none"}}>
                    <ArrowForwardIcon sx={{color:"#94131d", ml:2, mt:0.5}}/>
                </Link>
            </Box>            
            <Box sx={{display:"flex", justifyContent:"flex-start", mt:3, mb:3}}>
                {seriesSlice && seriesSlice.map((serie)=>(
                    <Box key={serie.id}>
                        <Presentacion
                        imagen={`https://image.tmdb.org/t/p/original/${serie.poster_path}`}
                        titulo= {serie.name}
                        link={serie.id}/>
                    </Box>                    
                ))}
                
            </Box>
        </Container>
    )
}
export default SeriesSecciones;