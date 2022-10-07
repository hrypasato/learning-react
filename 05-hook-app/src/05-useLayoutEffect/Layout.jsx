import { useCounter, useFetch } from "../hooks";
import { LoadingCard, QuoteCard } from '../03-examples';

const QUOTES_URL = 'https://www.breakingbadapi.com/api/quotes/'

export const Layout = () => {
    const { counter, increment } = useCounter(1);
        
    const { data, isLoading, errors } = useFetch(`${QUOTES_URL}${counter}`);

    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {
                isLoading 
                ?  <LoadingCard/>
                :   <QuoteCard author={author} quote={quote}/>
            }
            <button 
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ () => increment() }
            >Next quote
            </button>
        </>
    )
}
