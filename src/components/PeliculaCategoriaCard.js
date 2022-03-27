import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const PeliculaCategoriaCard = ({peliculas, titulo}) => {
    return (
        <Container sx={{display:"flex", flexDirection:"column"}}>
            <Typography variant="h6"> {titulo }</Typography>
            <Box sx={{display:"flex", flexWrap:"wrap"}}>
            {peliculas.map(pelicula=>(
                <Card sx={{
                    display:"flex", 
                    flexDirection:"column", 
                    alignItems:"center", 
                    m:1, 
                    bgcolor:"transparent",
                }} key={pelicula.id}>
                    <ImageList sx={{ width: 222, height: 400, m:0}} cols={1} rowHeight={350}>
                        <ImageListItem>
                            <img
                                src= {`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
                                srcSet= {`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
                                alt= {pelicula.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    </ImageList>
                    <Typography 
                        variant="subtitle1" 
                        color="#11111"
                        fontWeight="bold" 
                        textAlign="center">
                        {pelicula.title}
                    </Typography>
                </Card>
            ))}
            </Box>
            
        </Container>
        
    )
}
export default PeliculaCategoriaCard;