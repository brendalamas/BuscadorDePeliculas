import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import ListItem from '@mui/material/ListItem';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useParams  } from "react-router-dom";
import useFetchDetalles from '../hook/useFetchDetalles';

const CardDetallePersonajes = () =>{
    const params = useParams() 
    console.log(params.idPersonajes)

    const {detalles} = useFetchDetalles ("movie", `${params.idPersonajes}`)    
    console.log(detalles)

    return(
        <Box sx={{mt:12, display:"flex", height:561,
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${detalles.poster_path})`,
        backgroundSize:"cover"}}> 
            <CardMedia sx={{width:250}}
            component="img"
            image = {`https://image.tmdb.org/t/p/original/${detalles.poster_path}`}
            alt={detalles.title} 
            />
            <CardContent >
                <Typography variant='h4' fontWeight="bold" textAlign="center"> {detalles.title} </Typography>
                <Typography variant="body1" sx={{mt:1.2, mb:1.2}}> {detalles.overview} </Typography>
                <Typography variant='subtitle1'> Duracion: {detalles.runtime} min </Typography>
                <Typography variant='subtitle1'> Presupuesto: ${detalles.budget} </Typography>
                <Typography variant='subtitle1' sx={{display:"flex", alignItems:"center"}}> Produccion: 
                        {detalles.production_companies && detalles.production_companies.map((curr) => (
                            <Typography key={curr.id} variant="subtitle1">  {curr.name} </Typography>
                        ))}
                </Typography>
                <Typography variant='subtitle1'> Generos:  
                        {detalles.genres && detalles.genres.map((curr) => (
                            <ListItem key={curr.id} sx={{pt:0, pb:0}}>
                                <LocalMoviesIcon sx={{pr:1}} />
                                <ListItemText
                                    primary= {curr.name}
                                />
                            </ListItem>
                        ))}
                </Typography>
            </CardContent>
        </Box>
    )
}

export default CardDetallePersonajes;