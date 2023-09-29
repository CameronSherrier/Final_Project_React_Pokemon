import { fetchPokemon } from "../api/pokemon";
import PokemonData from "../components/PokeData";
import Search from "../components/Search";
import { useState } from 'react';
import { Spinner, Alert } from 'react-bootstrap';

const spinnerStyle = {
    width: '10rem',
    height: '10rem',
    borderwidth: '1rem',
};

const spinnerWrapperStyle = {
    textAlign: 'center',
    marginTop: '50px',
}

export default function DisplayPokemon() {

    const [ error, setError ] = useState(false)
    const [ pokemon, setPokemon ] = useState();
    const [ errorMsg, setErrorMsg ] = useState('');
    const [ loading, setLoading ] = useState(false);


    const getPokemon = async (query) => {
        if (!query) {
            setErrorMsg('You must enter a Pokemon name!');
            setError(true);
            return;
        }
        setError(false)
        setLoading(true);
        setTimeout( async () => {
            try {
                const response = await fetchPokemon(query);
                const results = await response.json();
                setPokemon(results);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true)
                setErrorMsg('Pokemon was not found, try all lowercase!')
            }
        }, 1500);
    }

    return (
        <div>
            {error ? (
            <Alert variant='danger'>{errorMsg}</Alert>
            ): null}
            <Search getPokemon={getPokemon} />
            {loading ? (
                <div style={spinnerWrapperStyle}>
                <Spinner style={spinnerStyle} animation='border' />
                </div>
            ) : null}
            {!loading && pokemon ? (
                <PokemonData 
                    name={pokemon.name} 
                    sprite={pokemon.sprites.front_default}
                    abilities={pokemon.abilities}
                    stats={pokemon.stats}
                    types={pokemon.types}
                    moves={pokemon.moves}
                />
            ): null}
        </div>
    )
}