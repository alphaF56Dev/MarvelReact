import { useEffect, useState } from "react";

export default function useFetch(url, options){
    const [result, setResult] = useState(null); //variable que guardara los resultados
    const [loading, setLoading] = useState(true); //variables que definira si se esta cargando los resultados
    const [error, setError] = useState(null); //variable que guarda si se presneta un error

    useEffect(()=>{
        (async ()=>{ //funcion asincrona que que permite hacer la peticion de nuestra api
            try{
                const res = await fetch(url, options); //peticion de la api
                const json = await res.json(); //respuesta de la api
                setResult(json); //asignacion de la respuesta de la api a la variable result
                setLoading(false);
            }catch(err){
                setError(err);
                setLoading(false);
            }
        })();
    }, [options, url]); //opciones en las que la funcion se ejecutara cada que haya un cambio

    return {result, loading, error};

};