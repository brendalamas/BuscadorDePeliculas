import {Link} from 'react-router-dom';
const NavBar = ()=>{
    return(
        <div>
            <Link to="/"><button>Home</button></Link>
            <Link to="/ultimoslanzamientos"><button>Ultimos Lanzamientos</button></Link>
            <Link to="/populares"><button>Populares</button></Link>
            <Link to="/buscar"><button>Buscar</button></Link>
        </div>
    )
}

export default NavBar;