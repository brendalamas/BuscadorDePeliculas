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

    const url =`${urlBase}${definirURLDetalles(categoria,id)}?${apiKey}${queryParamLenguaje(language)}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setDetalles(data)
            setTipoLanguage(data.results)
        })
    }, [url])

    return {
        detalles:detalles
    }
}

export default useFetchDetalles;