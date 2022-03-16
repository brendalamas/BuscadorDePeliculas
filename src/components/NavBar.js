import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';

import {Link} from 'react-router-dom';


const NavBar = ()=>{
    return(
        <AppBar sx={{display:"flex", flexDirection:"row", bgcolor:"#FF7E88"}}>
            <Container sx={{m:2}}>
                <Link to="/"> <Button sx={{m:1, bgcolor:"#FF3B4B", color:"#FAFAFA"}}>Home</Button></Link>
                <Link to="/ultimoslanzamientos"> <Button sx={{m:1, bgcolor:"#FF3B4B", color:"#FAFAFA"}}>Ultimos Lanzamientos</Button></Link>
                <Link to="/populares"> <Button sx={{m:1, bgcolor:"#FF3B4B", color:"#FAFAFA"}}>Populares</Button></Link>
                <Link to="/buscar"> <Button sx={{m:1, bgcolor:"#FF3B4B", color:"#FAFAFA"}}>Buscar</Button></Link>
            </Container>

        </AppBar>

    )
}

export default NavBar;