import { pokedex, PokemonRequest } from "../../atoms/pokedex-atom";
import { useAtom } from 'jotai';
import { usePokemon } from "../data/index"
import { useEffect, useState } from "react";
import { fetcher } from "../data";
import Card, { CardImage } from "@pds-react/card";

interface SSRProps {
	mons: PokemonRequest
}

export const WhosThatPoke = ({ mons }: SSRProps) => {

		// usePokemon is causing a render, then grabbing new pokemon array and causing a loop
		const arr = new Set();
		while(arr.size !== 5) arr.add(Math.floor(Math.random() * mons.results.length) + 1);
		// tslint:disable-next-line
		const randomMons = Array.from(arr).map(num => mons.results[num]);
		const [guess, setGuess] = useState(randomMons[Math.floor(Math.random() * 4)]);
		console.log(guess);

	useEffect(() => {
		console.log("USE EFFECT");
		// Take filtered list
		// Take 5 random pokemon from filtered pokemon - Could be an array of 5 random numbers
		// remove guess pokemon from filtered list
		if (guess.url) {
			const fetchData = async () => {
				const data = await fetcher.get(guess.url);
				setGuess(data)
			}
			fetchData();
		}


	}, [mons, guess])

	console.log(mons);
	// Will have to use SWR to fetch.
	// Have to exclude the guess that has already happened? Should they be exluded from the random list as well? 


	// const [dex] = useAtom(pokedex);
	// const [filtered, setFiltered] = useState(dex);


	console.log(arr);
	// const guess = randomMons[1];

	// console.log(getPokemonList());
	// const { pokemon, isLoading } = usePokemon(guess.url);
	// console.log("component render");
	console.log(randomMons);
	return (
		<>
			{guess.sprites ? (
				<>
					<h2>Guess that Poke</h2>
					<p>{guess.name}</p>
					<Card className="pds-color-bg-primary-gray-5 pds-util-padding-20">
						<CardImage style={{ height: "auto", margin: "auto" }} src={guess.sprites.other["official-artwork"].front_default} alt={`Image of ${guess.name} from the front profile`} />
					</Card>

					<h3>Could it be?</h3>
						<ul>
							{randomMons.map(mon => <li key={mon.name}>{mon.name}</li>)}
						</ul>

				</>
			) : "Loading"}
			
		</>
	)
}

export default WhosThatPoke;