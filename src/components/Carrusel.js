import {Link} from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import useFetchPeliculas from "../hook/useFetchPeliculas";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const Carrusel = () => {
    const {pelicula: principales} = useFetchPeliculas("now_playing","movie")
    return(
        <div>
            <Slider 
                dots={true}
                infinite= {true}
                slidesToShow={1}
                slidesToScroll= {1}
                autoplay= {true}
                autoplaySpeed= {2000}
                pauseOnHover= {true}
            >
                {principales.map((principal)=>(
                    <ImageList sx={{overflow:"hidden"}} key={principal.id}>
                        <ImageListItem sx={{maxHeight:350}}>
                            <img
                                src={`https://image.tmdb.org/t/p/original/${principal.backdrop_path}`}
                                srcSet={`https://image.tmdb.org/t/p/original/${principal.backdrop_path}`}
                                alt={principal.title}
                                loading="lazy"
                            />
                            <Box sx={{
                                position:"absolute", 
                                left:350, 
                                bottom:40, 
                                color: "#FFFFFF", 
                                width:500,
                                bgcolor:"#111111",
                                opacity:0.7,
                                p:1,
                                textAlign:"center"
                            }}> 
                                <Typography variant="subtitle1" fontWeight="bold"> {principal.title} </Typography>
                                <Typography variant="body2"> {principal.overview} </Typography>
                                <Link to={`/carddetallepelicula/${principal.id}`}>
                                    <Button>Ver mas</Button>
                                </Link>
                            </Box>
                        </ImageListItem >
                    </ImageList> 
                ))}
            </Slider>
        </div>
    )
}

export default Carrusel;