import { useState, useEffect } from "react"
import {
    urlBase,
    apiKey,
    queryParamLenguaje,
    definirURL,
  } from "../utils/variables";

const useFetchPeliculas = (categoria, tipo, search) =>{
    const [pelicula, setPelicula] = useState([])

    const url =`${urlBase}${definirURL(categoria, tipo, search)}?${apiKey}${queryParamLenguaje}=es`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setPelicula(data.results)
            console.log(data.results)
        })
    }, [url])

    return {
        pelicula:pelicula
    }
}

export default useFetchPeliculas;