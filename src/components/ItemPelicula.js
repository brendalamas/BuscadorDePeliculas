import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const ItemPelicula = ({titulo, imagen, link}) => {

    return (
        <Card sx={{display:"flex"}}>

            <Box sx={{display:"flex", alignItems:"center"}}>
                <CardMedia sx={{width:50}}
                component="img"
                height="50"
                image={imagen}
                alt="portada de imagen"
                />
            </Box>

            <CardContent sx={{display:"flex", alignItems:"center"}}>
                <Typography>{titulo}</Typography>
                <Link to={`/carddetallepelicula/${link}`}>
                    <ArrowRightIcon/>
                </Link>
            </CardContent>


            
        </Card>
    )
}

export default ItemPelicula;