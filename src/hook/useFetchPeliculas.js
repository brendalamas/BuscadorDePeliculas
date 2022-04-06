import { useState, useEffect } from "react"
import {
    urlBase,
    apiKey,
    queryParamLenguaje,
    definirURL,
  } from "../utils/variables";

const useFetchPeliculas = (categoria, tipo, search) =>{
    const [isLoading, setIsLoading] = useState(false);
    const [pelicula, setPelicula] = useState([])

    const url =`${urlBase}${definirURL(categoria, tipo)}?${apiKey}${queryParamLenguaje}=es`

    useEffect(()=>{
        setIsLoading(true);
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setPelicula(data.results)
            setIsLoading(false);
        })
    }, [url])

    return {
        pelicula:pelicula,
        isLoading: isLoading,
    }
}

export default useFetchPeliculas;