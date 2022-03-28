import Card from '@mui/material/Card';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

const PeliculaDetallesCategoria = ({imagen, titulo, link}) => {
    return (
        <Card sx={{
            display:"flex", 
            flexDirection:"column", 
            alignItems:"center", 
            m:1, 
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
            <Typography 
                variant="subtitle1" 
                color="#11111"
                fontWeight="bold" 
                textAlign="center">
                {titulo}
            </Typography>
        </Card>
    )
}

export default PeliculaDetallesCategoria;