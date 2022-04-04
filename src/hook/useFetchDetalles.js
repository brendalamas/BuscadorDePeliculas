import { useState, useEffect } from "react"
import {
    urlBase,
    apiKey,
    queryParamLenguaje,
    definirURLDetalles,
  } from "../utils/variables";

const useFetchDetalles = (categoria, id) =>{
    const [detalles, setDetalles] = useState([])

    const url =`${urlBase}${definirURLDetalles(categoria,id)}?${apiKey}${queryParamLenguaje}es`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setDetalles(data)
        })
    }, [url])

    return {
        detalles:detalles
    }
}

export default useFetchDetalles;