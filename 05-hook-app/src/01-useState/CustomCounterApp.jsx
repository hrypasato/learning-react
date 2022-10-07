import { useCounter } from "../hooks";

export const CustomCounterApp = () => {
    const { counter, increment, decrement, reset  } = useCounter();
    return (
    <> 
        <h1>Counter with custom hook</h1>
        <hr />
        <h3>Count: {counter}</h3>
        <hr />
        <button 
            className="btn btn-primary" 
            onClick={() => increment(2)}
        >+2</button>
        <button 
            className="btn btn-primary" 
            onClick={reset}
        >Reset</button>
        <button 
            className="btn btn-primary" 
            onClick={() => decrement(1)}
        >-1</button>
    </>
    );
}
