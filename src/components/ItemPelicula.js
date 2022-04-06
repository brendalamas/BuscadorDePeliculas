import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ItemPelicula = ({titulo, imagen, link, isTV}) => {
    
    return (
        <Link to={isTV? `/detalle-series/${link}`:`/detalle-peliculas/${link}`} style={{textDecoration:"none"}}>
            <Card sx={{display:"flex", flexDirection:"column", alignItems:"center", bgcolor:"transparent", m:1}}>
                <Box sx={{display:"flex"}}>
                    <CardMedia sx={{width:250}}
                    component="img"
                    image = {imagen}
                    alt={titulo}
                    />
                </Box>
                <CardContent sx={{display:"flex", alignItems:"center"}}>
                    <Typography variant="subtitle1" fontWeight= "bold">
                        {titulo}
                    </Typography>
                </CardContent>
            </Card>
        </Link>

    )
}

export default ItemPelicula;