import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./Peliculas.css";


const Home = ()=>{
    const [populars, setPopulars] = useState([]);

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=c7e318bc4679faa16a6f940e1435e019&language=es-ES&page=1")
        .then(res=>res.json())
        .then(data=>{
            setPopulars(data.results)
        })
    },[])
    const [puntuadas, setPutuadas] = useState([]);

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=c7e318bc4679faa16a6f940e1435e019&language=es-ES&page=1")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setPutuadas(data.results)
        })
    },[])


    return(
        <div className='peliculas'>
            <div className='populares'>
            <h1>Peliculas Populares</h1>
                {populars.map((popular)=>(
                    <Link to={`/peliculas/${popular.id}`}><h1>{popular.original_title}</h1></Link>
                ))}
            </div>
            <div className='puntuadas'>
            <h1>Peliculas Mejor Puntuadas</h1>
                {puntuadas.map((puntuada)=>(
                    <Link to={`/peliculas/${puntuada.id}`}><h1>{puntuada.original_title}</h1></Link>
                ))}
            </div>
        </div>
        

    )
}

export default Home;