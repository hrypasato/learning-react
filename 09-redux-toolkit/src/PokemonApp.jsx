import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices";

export const PokemonApp = () => {

    const dispatch = useDispatch();
    const { page, isLoading, pokemons } = useSelector( state => state.pokemons);
    
    useEffect(() => {
        dispatch( getPokemons() )
    
    }, [])
    

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            {
                isLoading && <span>Loading ...</span>
            }
            <ul>
                {
                    pokemons.map(
                        ({ name, url }) => <li key={name}>{name}</li>
                    )
                }
            </ul>
            <button
                disabled={isLoading}
                onClick={ ()=> dispatch( getPokemons(page) ) }
            >Next page
            </button>
        </>
    );
}
