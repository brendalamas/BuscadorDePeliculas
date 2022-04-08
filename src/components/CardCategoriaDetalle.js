import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';

const CardCategoriaDetalle = ({titulo, imagen, isTV, id}) => {
    return(
        <Link to={isTV? `/detalle-series/${id}`:`/detalle-peliculas/${id}`} 
            style={{textDecoration:"none"}}
        >
            <Card key={id} sx={{
                display:"flex", 
                flexDirection:"column", 
                alignItems:"center", 
                m:1, 
                bgcolor:"transparent",
                width: 250,
                height:500
            }}>
                <ImageList sx={{ width: 250, m:0, height:400}} cols={1}>
                    <ImageListItem>
                        <img
                            src= {imagen}
                            srcSet= {imagen}
                            alt= {titulo}
                            loading="lazy"
                        />
                    </ImageListItem>
                </ImageList>
                <Typography 
                    variant="subtitle1" 
                    color="#1976D2"
                    fontWeight="bold" 
                    textAlign="center"
                    sx={{p:2}}
                >
                    {titulo}
                </Typography>
            </Card>
        </Link>
    )
}

export default CardCategoriaDetalle;