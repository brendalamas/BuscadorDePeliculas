import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import imagenNotFound from "../img/notFound.png";

const BusquedaCard = ({imagen, titulo, id, tipo}) => {

    return (
        <Link to={tipo === "movie"?`/detalle-peliculas/${id}`:`/detalle-series/${id}`} 
            style={{textDecoration:"none"}}
        >
        <Card sx={{bgcolor:"transparent", m:1, width:300}} key={id}>

                <Box sx={{display:"flex"}}>
                    <CardMedia sx={{width:300}}
                    component="img"
                    image = {imagen? imagen : imagenNotFound}
                    alt={titulo}
                    />
                </Box>
                <Typography  sx={{p:3}}
                    variant="subtitle1" 
                    fontWeight= "bold" 
                    textAlign="center" 
                    color="#000000"
                >
                    {titulo}
                </Typography>
        </Card>
        </Link>

    )
}

export default BusquedaCard;