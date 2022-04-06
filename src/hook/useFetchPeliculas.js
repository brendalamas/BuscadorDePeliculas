import { useState, useEffect } from "react"
import {
    urlBase,
    apiKey,
    queryParamLenguaje,
    definirURL,
  } from "../utils/variables";

const useFetchPeliculas = (categoria, tipo, language) =>{
    const [isLoading, setIsLoading] = useState(false);
    const [pelicula, setPelicula] = useState([]);
    const [tipoLanguage, setTipoLanguage] = useState("es")

    const url =`${urlBase}${definirURL(categoria, tipo)}?${apiKey}${queryParamLenguaje(language)}`

    useEffect(()=>{
        setIsLoading(true);
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setPelicula(data.results)
            setIsLoading(false);
            setTipoLanguage(data.results)
        })
    }, [url])
    
    console.log(tipoLanguage)

    return {
        pelicula:pelicula,
        isLoading: isLoading,
    }
}

export default useFetchPeliculas;