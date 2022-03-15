import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';

import {Link} from 'react-router-dom';


const NavBar = ()=>{
    return(
        <AppBar sx={{display:"flex", flexDirection:"row", bgcolor:"#111111"}}>
            <Container sx={{m:2}}>
                <Link to="/"><Button variant="contained" sx={{m:1}}>Home</Button></Link>
                <Link to="/ultimoslanzamientos"><Button variant="contained" sx={{m:1}}>Ultimos Lanzamientos</Button></Link>
                <Link to="/populares"><Button variant="contained" sx={{m:1}}>Populares</Button></Link>
                <Link to="/buscar"><Button variant="contained" sx={{m:1}}>Buscar</Button></Link>
            </Container>

        </AppBar>

    )
}

export default NavBar;