import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import ListItem from '@mui/material/ListItem';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';


const CardDetallePersonajesID = ({detalles}) => {
    return (
        <Box sx={{mt:12, display:"flex", flexDirection:"column", bgcolor:"black"}}> 
            <CardMedia sx={{position:"center", opacity: 0.4}}
            component="img"
            image = {`https://image.tmdb.org/t/p/original/${detalles.backdrop_path}`}
            alt={detalles.title ? detalles.title: detalles.name} 
            />
            <CardContent sx={{display:"flex", mt:5, p:1, position:"absolute", left:100, top:100}}>
                <Box sx={{width:350, display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <CardMedia
                    component="img"
                    image = {`https://image.tmdb.org/t/p/original/${detalles.poster_path}`}
                    alt={detalles.title ? detalles.title: detalles.name} 
                    />
                </Box>
                
                <Box sx={{pl:2, width:650, color:"white"}}>
                    <Typography variant='h4' fontWeight="bold"> 
                        {detalles.title ? detalles.title: detalles.name}  
                    </Typography>
                    <Typography variant="body1"sx={{mt:1.2, mb:1.2}}> 
                        {detalles.overview} 
                    </Typography>
                    {/* <Typography variant='subtitle1'>
                        Duracion: 
                        {detalles.runtime? detalles.runtime : detalles.episode_run_time } min
                    </Typography> */}

                    {/* {detalles.number_of_seasons && 
                    `${<Typography variant='subtitle1'> 
                        Temporadas: {detalles.number_of_seasons}
                    </Typography>}`
                    } 
                    
                    {detalles.number_of_episodes && 
                    `${<Typography variant='subtitle1'> 
                        Episodios: {detalles.number_of_episodes}
                    </Typography>}`
                    } 

                    <Typography variant='subtitle1'> 
                        {detalles.budget &&  `Presupuesto: $${detalles.budget}`} 
                    </Typography> */}
                    {/* <Typography variant='subtitle1'>
                        Produccion: 
                        {detalles.production_companies && detalles.production_companies.map((curr) => (
                            <ListItem key={curr.id} sx={{pt:0, pb:0}}>  
                                <ListItemText
                                    primary= {`• ${curr.name}`}
                                />
                            </ListItem>
                        ))}
                    </Typography>
                    <Typography variant='subtitle1'>   
                        Generos: 
                        {detalles.genres && detalles.genres.map((curr) => (
                            <ListItem key={curr.id} sx={{pt:0, pb:0}}>
                                <LocalMoviesIcon sx={{pr:1}} />
                                <ListItemText
                                    primary= {curr.name}
                                />
                            </ListItem>
                        ))}
                    </Typography> */}
                </Box>
            </CardContent>
        </Box>
    )
}

export default CardDetallePersonajesID;