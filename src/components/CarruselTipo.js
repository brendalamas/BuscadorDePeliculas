import {Link} from 'react-router-dom';
import Slider from "react-slick";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const CarruselTipo = ({tipo, isTV}) => {
    return (
        <Slider
            dots={true}
            infinite= {true}
            slidesToShow={1}
            slidesToScroll= {1}
            autoplay= {true}
            autoplaySpeed= {2000000}
            pauseOnHover= {true}
        >
        {tipo.map((pelicula)=>(
            <ImageList sx={{overflow:"hidden"}} key={pelicula.id}>
                <ImageListItem sx={{maxHeight:350}} className="carrusel">
                    <img
                        src={`https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}`}
                        srcSet={`https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}`}
                        alt={pelicula.title}
                        loading="lazy"
                    />
                    <Box className="texto-carrusel" sx={{
                        position:"absolute", 
                        left:350, 
                        bottom:40, 
                        width:500,
                        opacity:0.7,
                        p:1,
                        bgcolor:"#111111",
                        textAlign:"center"
                    }}> 
                        <Typography variant="subtitle1" fontWeight="bold" color="#FFFFFF"> {pelicula.title} </Typography>
                        <Typography variant="body2" color="#FFFFFF"> {pelicula.overview} </Typography>
                        <Link to={isTV? `/detalle-series/${pelicula.id}`:`/detalle-peliculas/${pelicula.id}`} 
                        style={{textDecoration:"none"}}>
                            <Button>Ver mas</Button>
                        </Link>
                    </Box>
                </ImageListItem >
            </ImageList> 
        ))}
        </Slider>
    )
}

export default CarruselTipo;