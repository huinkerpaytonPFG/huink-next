import { pokedex, PokemonRequest } from "../../atoms/pokedex-atom";
import { useAtom } from 'jotai';
import { usePokemon } from "../data/index"
import { useState } from "react";

interface SSRProps {
	mons: PokemonRequest
}

export const WhosThatPoke = ({ mons }: SSRProps) => {
	console.log(mons);
	// Will have to use SWR to fetch.
	// Have to exclude the guess that has already happened? Should they be exluded from the random list as well? 

	// Take filtered list
	// Take 5 random pokemon from filtered pokemon - Could be an array of 5 random numbers
	// remove guess pokemon from filtered list

	// const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1500");
	// const pokemon = await res.json();
	// const guess = await fetch(pokemon.results[Math.floor(Math.random() * pokemon.results.length)].url);
	// const [dex] = useAtom(pokedex);
	// const [filtered, setFiltered] = useState(dex);

	// usePokemon is causing a render, then grabbing new pokemon array and causing a loop
	const arr = new Set();
	const randomMons = [];
	while(arr.size !== 5) arr.add(Math.floor(Math.random() * mons.results.length) + 1);
	// tslint:disable-next-line
	arr.forEach(value => randomMons.push(mons.results[value]));
	console.log(arr);
	// const guess = randomMons[1];

	// console.log(getPokemonList());
	// const { pokemon, isLoading } = usePokemon(guess.url);
	// console.log("component render");

	return (
		<>
			<h2>Guess that Poke</h2>
			<p>{}</p>
		</>
	)
}

export default WhosThatPoke;