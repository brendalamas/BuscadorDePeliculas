import { useEffect, useState } from "react";

const Populares = ()=>{
    const [populares, setPopulares]= useState([]);

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=c7e318bc4679faa16a6f940e1435e019&languaje=es-ES&page=1")
        .then(res=>res.json())
        .then(data=>{
            setPopulares(data.results);
        })
    },[])

    return(
        <div> 
            {populares.map((popular)=>(
                <h1>{popular.title}</h1>
            ))} 
        </div>
    )
}

export default Populares;

