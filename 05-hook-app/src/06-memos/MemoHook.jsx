import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const hevyProcess = ( iterarionNumber = 100 ) => {
    for(let i = 0; i < iterarionNumber; i++){
        console.log('Ahí va ...');
    }

    return `${ iterarionNumber } veces iteradas`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(false);
    const memorizedValue = useMemo( ()=> hevyProcess(counter), [counter] );

    return (
        <>
            <h1>Memorize <small>{ counter }</small></h1>
            <hr />
            <h3>{ memorizedValue }</h3>
            <hr />

            <button 
                onClick={ ()=> increment() }
                className="btn btn-primary"
            >+1
            </button>
            <button 
                className="btn btn-outline-primary"
                onClick={ () => setShow(!show) }
            >{ show ? 'Show':'Hide' }
            </button>
        </>
    )
}
