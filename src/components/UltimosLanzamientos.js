import { useEffect, useState } from "react";

const UltimosLanzamientos = ()=>{
    const [lanzamientos, setLanzamientos]= useState([]);

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=c7e318bc4679faa16a6f940e1435e019&languaje=es-ES&page=1")
        .then(res=>res.json())
        .then(data=>{
            setLanzamientos(data.results);
        })
    },[])

    return(
        <div> 
            {lanzamientos.map((lanzamiento)=>(
                <h1>{lanzamiento.title}</h1>
            ))} 
        </div>
    )
}

export default UltimosLanzamientos;