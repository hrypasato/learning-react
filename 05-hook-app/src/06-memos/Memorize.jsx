import { useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"

export const Memorize = () => {

    const { counter, increment } = useCounter()
    const [show, setShow] = useState(false);

    return (
        <>
            <h1>Memorize <Small value={counter}/></h1>
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
