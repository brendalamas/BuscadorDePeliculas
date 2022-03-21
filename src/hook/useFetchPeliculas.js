import { useState, useEffect } from "react"

const useFetchPeliculas = (categoria) =>{
    const [pelicula, setPelicula] = useState([])

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${categoria}?api_key=6e372c30d27676867cdbcfd7e00f4cf2&language=es-AR&page=1`)
        .then(res=>res.json())
        .then(data=>{
            setPelicula(data.results)
        })
    }, [categoria])

    return pelicula
}

export default useFetchPeliculas;