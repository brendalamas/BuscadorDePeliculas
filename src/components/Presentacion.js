import {Link} from 'react-router-dom';

import Card from "@mui/material/Card";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Presentacion = ({imagen, titulo, link}) => {
    return (
        <Link to={`/carddetallepelicula/${link}`} style={{textDecoration:"none"}}>
        <Card
        sx={{
            display:"flex", 
            flexDirection:"column", 
            alignItems:"center", 
            m:0.5, 
            bgcolor:"transparent"
        }}>
                <ImageList sx={{ width: 222, height: 400, m:0}} cols={1} rowHeight={350}>
                    <ImageListItem>
                        <img
                            src= {imagen}
                            srcSet= {imagen}
                            alt= {titulo}
                            loading="lazy"
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant="subtitle1" color="#FF7E88" 
                fontWeight="bold" textAlign="center">
                    {titulo}
                </Typography>
                <RemoveRedEyeIcon sx={{color:"#FF7E88", m:1.5}}/>
            </Card>
                <Typography 
                    variant="subtitle1" 
                    color="#FF7E88" 
                    fontWeight="bold" 
                    textAlign="center">
                    {titulo}
                </Typography>
                <Box sx={{display:"flex", justifyContent:"center"}}>
                    <RemoveRedEyeIcon sx={{color:"#FF7E88", m:1.5}}/>
                </Box>
            </Link>
    )
}

export default Presentacion;