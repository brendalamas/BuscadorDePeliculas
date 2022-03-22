import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';

import {Link} from 'react-router-dom';


const NavBar = ()=>{
    return(
        <AppBar sx={{display:"flex", flexDirection:"row", bgcolor:"#FF7E88"}} >
            <Container sx={{m:2}}>
                <Link to="/" style={{textDecoration:"none"}}> <Button sx={{m:1, bgcolor:"#FAFAFA", color:"#FF7E88"}}>Home</Button></Link>
                <Link to="/ultimoslanzamientos" style={{textDecoration:"none"}}> <Button sx={{m:1, bgcolor:"#FAFAFA", color:"#FF7E88"}}>Ultimos Lanzamientos</Button></Link>
                <Link to="/populares" style={{textDecoration:"none"}}> <Button sx={{m:1, bgcolor:"#FAFAFA", color:"#FF7E88"}}>Populares</Button></Link>
                <Link to="/buscar" style={{textDecoration:"none"}}> <Button sx={{m:1, bgcolor:"#FAFAFA", color:"#FF7E88"}}>Buscar</Button></Link>
            </Container>

        </AppBar>

    )
}

export default NavBar;