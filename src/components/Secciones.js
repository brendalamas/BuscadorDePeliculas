import {Link} from 'react-router-dom';
import Typography  from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Presentacion from "./Presentacion"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import notFound from "../img/notFound.png"

const Secciones = ({cardPrincipales, titulo, categoria, isTV}) => {
    return (
        <Container>
            <Box bgcolor="#111111" sx={{mt:3, mb:3, p:1, display:"flex", alignItems:"center"}}>
                <Typography variant="h6" fontWeight="bold" color="#94131d">
                    {titulo}
                </Typography>
                <Link to={isTV?`/seriecategoria/${categoria}` :`/peliculacategoria/${categoria}`} 
                    style={{textDecoration:"none"}}
                >
                    <ArrowForwardIcon sx={{color:"#94131d", ml:2, mt:0.5}}/>
                </Link>
            </Box>            
            <Box sx={{display:"flex", justifyContent:"center", mt:3, mb:3, flexWrap:"wrap"}}>
                {cardPrincipales.map((principal)=>(
                    <Box key={principal.id}>
                        <Presentacion
                        imagen= {principal.poster_path ? 
                            `https://image.tmdb.org/t/p/original/${principal.poster_path}`
                            : notFound
                        }
                        titulo= {principal.title? principal.title : principal.name}
                        link={principal.id}
                        isTV={isTV}
                        />
                    </Box>                    
                ))}
                
            </Box>
        </Container>
    )
}
export default Secciones;