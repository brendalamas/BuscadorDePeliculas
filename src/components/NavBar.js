import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import AppBar from '@mui/material/AppBar';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import TvIcon from '@mui/icons-material/Tv';
import LogoBL from "../img/logo.jpeg";
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

    return(
        <AppBar sx={{
            display:"flex", 
            flexDirection:"row", 
            justifyContent:"space-between", 
            alignItems:"center", 
            bgcolor:"#7F020C",
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

            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center",width:350}}>
                <Box sx={{ display:"flex", justifyContent:"space-between", width:200}}>
                    <Link to="/" style={{textDecoration:"none"}}> 
                        <HomeIcon sx={{color:"#111111", fontSize:35}}/> 
                    </Link>
                    <Link to="/peliculas" style={{textDecoration:"none"}}> 
                        <VideocamIcon sx={{color:"#111111", fontSize:35}}/>
                    </Link>
                    <Link to="/series" style={{textDecoration:"none"}}> 
                        <TvIcon sx={{color:"#111111", fontSize:35}}/>
                    </Link>
                    <Link to="/busqueda" style={{textDecoration:"none"}}> 
                        <SearchIcon sx={{color:"#111111", fontSize:35}}/> 
                    </Link>

                </Box>
                <Box sx={{ width: 70, ml:2}}>
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