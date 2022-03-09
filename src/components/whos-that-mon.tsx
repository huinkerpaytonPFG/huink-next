
import { useEffect, useState } from "react";
import { Form, RadioFieldset, Radio } from "@nsk/form";
import { useForm } from 'react-hook-form';
import Card, { CardImage } from "@pds-react/card";
import "@pds/form/form.min.css";
import Button from "@pds-react/button";
import { Pokemon, Mon, PokeDetails } from "../data/pokemon";
import { fetcher } from "../data";


interface SSRProps {
	pokemon: Pokemon
}

interface FormData{
	guess: string
}

// To DO
// Will have to use SWR to fetch. But will I actually?
// Have to exclude the guess that has already happened? Should they be exluded from the random list as well? 
// Will need to use state to keep track of the pokemon guesses
// How many are correct?

export const WhosThatPoke = ({ pokemon }: SSRProps) => {
	const formContext = useForm<FormData>();
	const [ guess, setGuess ] = useState<PokeDetails>();
	const [ pokeList, setPokeList ] = useState<Mon[]>();
	const [ pastGuess, setPastGuess ] = useState<number[]>([]);
	const [ tally, setTally ] = useState<number>(0);
	const [ count, setCount ] = useState<number>(1);

	const isCorrect = (values: FormData) => {
		if (!values.guess) return;
		// If value from form is correct
		if (values.guess === guess?.name) {

			setTally(tally + 1)
			if (count === 10) {
				// do something? Go to success?
			}
		}
		formContext.resetField("guess");
		setCount(count + 1)
	}


	useEffect(() => {
		if (pokemon && count) {
			const arr = new Set<number>();
			while(arr.size !== 5) {
				const num = Math.floor(Math.random() * pokemon.length) + 1;
				if (pastGuess.indexOf(num) === -1) arr.add(num);
			}
			const randomArray = Array.from(arr);
			const randomMon = randomArray[Math.floor(Math.random() * 4)];
			const list = randomArray.map((num) => pokemon[num]);
			const fetchData = async () => setGuess(await fetcher.get(`https://pokeapi.co/api/v2/pokemon/${pokemon[randomMon].name}`));

			fetchData();
			setPastGuess([...pastGuess, randomMon]);
			setPokeList(list as Mon[]);

		}
	}, [pokemon, count])

	return (
		<>
			<h2>Guess that Poke ({count} of 10)</h2>
			{guess && pokeList ? (
				<>
					<Card className="pds-color-bg-primary-gray-5 pds-util-padding-20">
						<CardImage style={{ height: "auto", margin: "auto" }} src={guess.sprites.other["official-artwork"].front_default} alt={`Image of ${guess.name} from the front profile`} />
					</Card>
					<Form formContext={formContext} onSubmit={(values) => isCorrect(values)}>
						<RadioFieldset legend="Could it be?">
							{pokeList.map(mon => (
								<Radio name="guess" key={mon.name} id={`guess-${mon.name}`} label={mon.name} value={mon.name} />
							))}
						</RadioFieldset>
						<Button variant="primary" type="submit">Submit</Button>
					</Form>
					<p>Total correct = {tally}</p>
				</>
			) : "Loading"}
		</>
	)
}

export default WhosThatPoke;