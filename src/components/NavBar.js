import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import AppBar from '@mui/material/AppBar';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import TvIcon from '@mui/icons-material/Tv';
import LogoBL from "../img/logo.jpeg"
const NavBar = ()=>{
    return(
        <AppBar sx={{
        display:"flex", 
        flexDirection:"row", 
        justifyContent:"space-between", 
        alignItems:"center", 
        bgcolor:"#7F020C",
        pl:2, pr:3}}>
            <Box sx={{display:"flex", justifyContent:"flex-start"}}>
                <Link to="/" style={{textDecoration:"none"}}> 
                    <CardMedia sx={{width:100}}
                        component="img"
                        image={LogoBL}
                        alt="logo de la app"
                    />
                </Link>

            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between", width:250}}>
                <Link to="/" style={{textDecoration:"none"}}> 
                    <HomeIcon sx={{color:"#111111", fontSize:35}}/> 
                </Link>
                <Link to="/peliculas" style={{textDecoration:"none"}}> 
                {/* aca tengo q poner las peliculas!! y adentro las peliculas mejor puntuadas y ultimos lanzamientos */}
                    <VideocamIcon sx={{color:"#111111", fontSize:35}}/>
                </Link>
                <Link to="/series" style={{textDecoration:"none"}}> 
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