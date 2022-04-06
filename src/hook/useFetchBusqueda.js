import { useState, useEffect } from "react"
import {
    urlBase,
    apiKey,
    queryParamLenguaje,
    searchMulti,
    queryParamSearch
  } from "../utils/variables";

const useFetchBusqueda = (language, busqueda) =>{
    const [personajes, setPersonajes] = useState([])

    const url =`${urlBase}${searchMulti}?${apiKey}${queryParamLenguaje(language)}${queryParamSearch(busqueda)}}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setPersonajes(data.results)
        })
    }, [url])

    return {
        personajes:personajes
    }
}

export default useFetchBusqueda;