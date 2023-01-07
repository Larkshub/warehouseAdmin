import axios from "axios";
import React, {useState, useEffect} from "react";
import {envConfig} from '../utils/env';


export const Dashboard = () => {
    const [pokemons, setPokemons] = useState<Array<any>>([]) 
    const [pokemonsFetched, setPokemonsFetched] = useState<Array<any>>([]) 
    const [searchedPokemon, setSearchedPokemon] = useState<string>('')
    const [isOrdered, setIsOrdered] = useState<boolean>(false)

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedPokemon(e.target.value)
        console.log('event', e.target.value)
        searchFilter(e.target.value)
    }
    const searchFilter = (search:string) => {
        console.log('recibido en search', search)
        let searchResult = pokemonsFetched.filter(pokemon => {
          if(pokemon.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
            return pokemon
          } 
        })
        setPokemons(searchResult)
        console.log('pokemom filter', pokemons)
    }

    const handleOrder = () => {
        setIsOrdered(!isOrdered)
        if(isOrdered){
            let reverseAlphabeticalOrder = pokemons.sort((a,b) =>  b.name.localeCompare(a.name));
            setPokemons(reverseAlphabeticalOrder) 
        }  else {               
            let alphabeticalOrder = pokemons.sort((a,b) =>  a.name.localeCompare(b.name));
            console.log('order', alphabeticalOrder)
            setPokemons(alphabeticalOrder)
            console.log('pkm ordenados', pokemons)
        }
        
    }

    const getPokemons = () => {
        axios(`${envConfig.REACT_APP_API_URL}`)
        .then(res => {
        console.log(res.data);
        setPokemons(res.data.results)
        setPokemonsFetched(res.data.results)
    })
    }
    


    useEffect(getPokemons, [] )
    return (
        <> 
        <div className="container">       
        <div className="container__row ">
            <ul>
             {pokemons ? pokemons.map(pokemon =>
                <li>{pokemon.name}</li> 
                )
            : null}
            </ul>
            </div>
         
            
        </div>
       </>
        
    )
}

export default Dashboard