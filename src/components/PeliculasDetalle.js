import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PeliculasDetalle = ()=>{
    const params = useParams()
    console.log(params.idPelicula);

    const [detalles, setDetalles] = useState([]);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${params.idPelicula}/videos?api_key=c7e318bc4679faa16a6f940e1435e019&languaje=es-ES`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.results);
            setDetalles(data.results);
        })
    }, [params.idPelicula])
    return(
        <div>
            detalles de la pelicula seleccionada
            {detalles.map((detalle)=>(
                <h1>{detalle.title}</h1>
            ))}
        </div>

    )
}

export default PeliculasDetalle;