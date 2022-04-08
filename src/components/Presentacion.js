import {Link} from 'react-router-dom';
import Card from "@mui/material/Card";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from "@mui/material/Typography";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Presentacion = ({imagen, titulo, link, isTV}) => {
    return (
        <Link to={isTV? `/detalle-series/${link}`:`/detalle-peliculas/${link}`} style={{textDecoration:"none"}}>
            <Card className="card-presentacion"
            sx={{
                display:"flex", 
                flexDirection:"column", 
                alignItems:"center", 
                m:1.5, 
                bgcolor:"transparent",
                width:250
            }}>
                <ImageList className="presentacion-imagen" sx={{ width: 250, height: 400, m:0}} cols={1} rowHeight={350}>
                    <ImageListItem>
                        <img
                            src= {imagen}
                            srcSet= {imagen}
                            alt= {titulo}
                            loading="lazy"
                        />
                    </ImageListItem>
                </ImageList>
                <Typography className="presentacion-titulo"
                variant="subtitle1" 
                color="#1976D2" 
                fontWeight="bold" 
                textAlign="center">
                    {titulo}
                </Typography>
                <RemoveRedEyeIcon sx={{m:1.5}}/>
            </Card>
        </Link>
    )
}

export default Presentacion;