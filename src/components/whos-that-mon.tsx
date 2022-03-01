import { PokemonRequest } from "../../atoms/pokedex-atom";
import PokeDetails from "../../src/data/details"
import { useEffect, useState } from "react";
import { fetcher } from "../data";
import Card, { CardImage } from "@pds-react/card";
import Button from "@pds-react/button";

interface SSRProps {
	mons: PokemonRequest
}

interface Mon {
	name: string,
	url: string
}

// To DO
// Will have to use SWR to fetch.
// Have to exclude the guess that has already happened? Should they be exluded from the random list as well? 
// Will need to use state to keep track of the pokemon guesses

export const WhosThatPoke = ({ mons }: SSRProps) => {
		const [ guess, setGuess ] = useState<PokeDetails | "">();
		const [ pokeList, setPokeList ] = useState<Mon[]>();

	useEffect(() => {
		console.log("render");
		if (!guess) {
			const arr = new Set<number>();
			while(arr.size !== 5) arr.add(Math.floor(Math.random() * mons.results.length) + 1);
			const list = Array.from(arr).map((num) => mons.results[num]);
			const fetchData = async () => setGuess(await fetcher.get(list[Math.floor(Math.random() * 4)].url));

			fetchData();
			setPokeList(list as Mon[]);
		}
	}, [mons, guess])

	return (
		<>
			<h2>Guess that Poke</h2>
			{guess && pokeList ? (
				<>
					<p>{guess.name}</p>
					<Card className="pds-color-bg-primary-gray-5 pds-util-padding-20">
						<CardImage style={{ height: "auto", margin: "auto" }} src={guess.sprites.other["official-artwork"].front_default} alt={`Image of ${guess.name} from the front profile`} />
					</Card>

					<h3>Could it be?</h3>
					<ul>
						{pokeList.map(mon => <li key={mon.name}>{mon.name}</li>)}
					</ul>
					<Button variant="primary" onClick={() => setGuess("")}>Reset List</Button>
				</>
			) : "Loading"}
			
		</>
	)
}

export default WhosThatPoke;