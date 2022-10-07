import { useLayoutEffect, useRef } from "react"

export const QuoteCard = ( { quote, author } ) => {

    const pRef = useRef();
    
    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();
        console.log({height, width})
    }, [quote])
    

    return (
        <blockquote 
            className="blockquote text-end"
            style={{ display:'flex' }}
        >
            <p ref={ pRef } className="mb-1">{ quote }</p>
            <footer className="blockquote-footer mt-3">{ author }</footer>
        </blockquote>
    )
}
