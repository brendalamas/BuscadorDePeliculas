import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import AppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import TvIcon from '@mui/icons-material/Tv';
import LogoBL from "../img/logo.png";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext} from 'react';
import Context from "../context/Context";


const NavBar = ()=>{
    const context = useContext(Context);
    const handleChangeIdioma = (e) => {
        context.setLanguage(e.target.value)
    }
    // #7F010C

    return(
        <AppBar position ="fixed" 
            sx={{
            display:"flex", 
            flexDirection:"row", 
            justifyContent:"space-between", 
            alignItems:"center", 
            bgcolor:"#000000",
            pl:1, pr:3}}
            
        >
            <Box sx={{display:"flex", justifyContent:"flex-start", p:1}}>
                <Link to="/" style={{textDecoration:"none"}}> 
                    <CardMedia sx={{width:100}}
                        component="img"
                        image={LogoBL}
                        alt="logo de la app"
                    />
                </Link>
            </Box>

            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Box sx={{ display:"flex", justifyContent:"space-between"}}>
                    <Link to="/series" style={{textDecoration:"none"}}> 
                        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", mr:3}}>
                            <TvIcon sx={{fontSize:35, mr:1}}color="primary"/>
                            <Typography variant="h6" color="primary">Series</Typography>
                        </Box>
                    </Link>
                    <Link to="/peliculas" style={{textDecoration:"none"}}> 
                        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", mr:3}}>
                            <VideocamIcon sx={{fontSize:35, mr:1}}color="primary"/>
                            <Typography variant="h6" color="primary">Peliculas</Typography>
                        </Box>
                    </Link>
                    <Link to="/busqueda" style={{textDecoration:"none"}}> 
                        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", mr:3}}>
                            <SearchIcon sx={{fontSize:35, mr:1}}color="primary"/> 
                            <Typography variant="h6" color="primary">Buscar</Typography>
                        </Box>
                    </Link>
                </Box>
                <Box sx={{ width: 100, ml:10}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label"> 🌍 </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            onChange={handleChangeIdioma}
                       >
                        <MenuItem value="es">Español</MenuItem>
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="pt">Português</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>

        </AppBar>
    )
}

export default NavBar;