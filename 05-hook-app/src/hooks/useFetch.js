import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data:null,
        isLoading:true,
        errors:null
    })

    const getFetch = async () => {
        
        setState({
            ...state,
            isLoading:true
        })

        const resp = await fetch(url);
        const data = await resp.json();
        
        setState({
            data,
            isLoading:false,
            errors:null
        })

    }

    useEffect(()=>{
        getFetch();
    },[url])


    return {
        data: state.data,
        isLoading: state.isLoading,
        errors: state.errors,
    };
}
