import { useState, useEffect } from "react"
import {
    urlBase,
    apiKey,
    queryParamLenguaje,
    definirURL,
    queryParamPagina
  } from "../utils/variables";

const useFetchPeliculas = (categoria, tipo, language, page) =>{
    const [isLoading, setIsLoading] = useState(false);
    const [pelicula, setPelicula] = useState([]);
    const [tipoLanguage, setTipoLanguage] = useState("es")
    const [totalPage, setTotalPage] = useState([]);

    const url =`${urlBase}${definirURL(categoria, tipo)}?${apiKey}${queryParamLenguaje(language)}${queryParamPagina}${page}`

    useEffect(()=>{
        setIsLoading(true);
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setPelicula(data.results)
            setTipoLanguage(data.results);
            setTotalPage(data.total_pages);
            setIsLoading(false);
        })
    }, [url, page])
    
    return {
        pelicula:pelicula,
        isLoading: isLoading,
        totalPage:totalPage
    }
}

export default useFetchPeliculas;