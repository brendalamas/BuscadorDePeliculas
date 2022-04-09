import { useState, useEffect } from "react"
import {
    urlBase,
    apiKey,
    queryParamLenguaje,
    definirURLDetalles,
  } from "../utils/variables";

const useFetchDetalles = (categoria, id, language) =>{
    const [detalles, setDetalles] = useState([])
    const [tipoLanguage, setTipoLanguage] = useState("es")
    const [isLoading, setIsLoading] = useState(false)

    const url =`${urlBase}${definirURLDetalles(categoria,id)}?${apiKey}${queryParamLenguaje(language)}`

    useEffect(()=>{
        setIsLoading(true)
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setDetalles(data)
            setTipoLanguage(data.results)
            setIsLoading(false)
        })
    }, [url])

    return {
        detalles:detalles,
        isLoading:isLoading
    }
}

export default useFetchDetalles;