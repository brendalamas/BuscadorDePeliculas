import {Link} from 'react-router-dom';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import TvIcon from '@mui/icons-material/Tv';

const NavBar = ()=>{
    return(
        <AppBar sx={{
            display:"flex", 
            flexDirection:"row", 
            justifyContent:"space-around", 
            alignItems:"center", 
            bgcolor:"#94131d"}} >
            <Box>
                <h1> aca va el logo</h1>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <Link to="/" style={{textDecoration:"none"}}> 
                    <HomeIcon sx={{color:"#111111", fontSize:35}}/> 
                </Link>
                <Link to="/ultimoslanzamientos" style={{textDecoration:"none"}}> 
                {/* aca tengo q poner las peliculas!! y adentro las peliculas mejor puntuadas y ultimos lanzamientos */}
                    <VideocamIcon sx={{color:"#111111", fontSize:35}}/>
                </Link>
                <Link to="/populares" style={{textDecoration:"none"}}> 
                {/* aca tengo q poner las series!! y adentro las series (?) mejor puntuadas y ultimos lanzamientos (?)*/}
                    <TvIcon sx={{color:"#111111", fontSize:35}}/>
                </Link>
                <Link to="/buscar" style={{textDecoration:"none"}}> 
                    <SearchIcon sx={{color:"#111111", fontSize:35}}/> 
                </Link>
            </Box>

        </AppBar>

    )
}

export default NavBar;