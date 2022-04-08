import Slider from "react-slick";
import {Link} from 'react-router-dom';
import ItemPelicula from "./ItemPelicula";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import notFound from "../img/notFound.png"
import CircularProgress from '@mui/material/CircularProgress';


const CarruselHome = ({titulo, pelicula, isLoading, categoria, isTV}) => {
    return (
        <Container className="carrusel-home" sx={{display:"flex", flexDirection:"column", mt:5, mb:7}}>
            {isLoading && <CircularProgress sx={{color:"black", fontSize:1000}}/>}
            <Box>
                <Link to={`/peliculacategoria/${categoria}`} style={{textDecoration:"none"}}>
                    <Typography variant="h4" color="#7C020C" bgcolor="#000000" fontWeight="bold" sx={{p:1, mb:2}}> 
                        {titulo}    
                    </Typography>
                </Link>
                <Slider 
                    infinite= {true}
                    slidesToShow= {3}
                    slidesToScroll= {1}
                    autoplay= {true}
                    speed= {2000}
                    autoplaySpeed= {2000}
                    cssEase= "linear"
                >
                    {pelicula.map(peli => (
                        <Box key={peli.id}>
                            <ItemPelicula
                                imagen={peli.backdrop_path ? 
                                    `https://image.tmdb.org/t/p/original/${peli.backdrop_path}`
                                    : notFound
                                }
                                titulo={peli.title? peli.title: peli.name}
                                link={peli.id}
                                isTV={isTV}
                            />
                        </Box>
                    ))}
                </Slider>
            </Box>
        </Container>
        
    )
}

export default CarruselHome;