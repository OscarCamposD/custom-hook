import { useEffect, useRef, useState } from "react";


export const useFetch = (url) => {

    const isMountend = useRef(true)
    const [state, setState] = useState({data:null,loading:true,error:null})

    useEffect(() => {
        
        return () => {
            isMountend.current=false
        }
    }, [])

    useEffect(() => {
        
        setState({data:null,loading:true,error:null})

        fetch (url) 
            .then(resp =>resp.json())
            .then(data =>{
                
                if(isMountend.current){
                    setState({
                        loading:false,
                        error:null,
                        data
                    })
                }
                
            });
        
    }, [url])
    return state;
}
