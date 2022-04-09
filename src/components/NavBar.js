import {Link} from 'react-router-dom';
import { useContext, useState} from 'react';
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
import Context from "../context/Context";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import {titulosExtras} from "../utils/titulos";


const NavBar = ()=>{
    const context = useContext(Context);
    const handleChangeIdioma = (e) => {
        context.setLanguage(e.target.value)
    }
    // const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
        <>
            {/* menu hamburguesa */}
            <AppBar position="fixed" sx={{bgcolor:"#000000", display:"none" }} className="appbar-responsive">
                <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
                    <Link to="/" style={{textDecoration:"none"}}> 
                        <CardMedia sx={{width:100}}
                            component="img"
                            image={LogoBL}
                            alt="logo de la app"
                        />
                    </Link>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                        <Box sx={{ width: 100, ml:10}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label"> <LanguageIcon sx={{color:"#1976D2"}}/>
                                </InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    label="Age"
                                    labelId="demo-simple-select-label"
                                onChange={handleChangeIdioma}
                            >
                                <MenuItem value="es">Español</MenuItem>
                                <MenuItem value="en">English</MenuItem>
                                <MenuItem value="pt">Português</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="primary"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <Link to="/series" style={{textDecoration:"none"}}> 
                                <MenuItem onClick={handleClose}>
                                    {titulosExtras[context.language].series}
                                </MenuItem>
                            </Link>
                            <Link to="/peliculas" style={{textDecoration:"none"}}>
                                <MenuItem onClick={handleClose}>
                                    {titulosExtras[context.language].peliculas}
                                </MenuItem>
                            </Link>
                            <Link to="/busqueda" style={{textDecoration:"none"}}>
                                <MenuItem onClick={handleClose}>
                                    {titulosExtras[context.language].buscar}
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        {/* menu sin responsive */}
        <AppBar position ="fixed" className="appbar-web"
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
                            <TvIcon sx={{fontSize:35, mr:1}}color="#1976D2"/>
                            <Typography variant="h6" color="#1976D2">
                                {titulosExtras[context.language].peliculas}    
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/peliculas" style={{textDecoration:"none"}}> 
                        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", mr:3}}>
                            <VideocamIcon sx={{fontSize:35, mr:1}}color="#1976D2"/>
                            <Typography variant="h6" color="#1976D2">
                            {titulosExtras[context.language].series}
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/busqueda" style={{textDecoration:"none"}}> 
                        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", mr:3}}>
                            <SearchIcon sx={{fontSize:35, mr:1}}color="#1976D2"/> 
                            <Typography variant="h6" color="#1976D2">
                                {titulosExtras[context.language].buscar}
                            </Typography>
                        </Box>
                    </Link>
                </Box>
                <Box sx={{ width: 100, ml:10}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label"> <LanguageIcon sx={{color:"#1976D2"}}/>  </InputLabel>
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
        </>
    )
}

export default NavBar;