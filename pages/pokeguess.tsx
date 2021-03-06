import react, { useState } from "react";
import { GetStaticProps } from 'next';
import { Row, Col } from "@pds-react/grid";
import Button from "@pds-react/button";
// import { useAtom } from 'jotai';
import WhosThatPoke from "../src/components/whos-that-mon";
// import { pokedex } from "../atoms/pokedex-atom";
import { PokemonRequest } from "../src/data/pokemon";

// To do..
// Share original fetch between this and whos that mon component
// Get a list of 5 pokemon and exlude the actual pokemon and maybe the rest from the list.


interface FormData {
  search: string;
}

interface SSRProps {
	pokemon: PokemonRequest
}

const PokeGuess = ({ pokemon }: SSRProps) => {
	const [start, setStart] = useState(false);
	// const [, setDex] = useAtom(pokedex);
	const letsGo = () => {
		setStart(true);
		// setDex(pokemon);
	}

	return (
		<>
			<Row>
				<Col span={6}>
					<h1>Who&#39;s that Pok&eacute;mon?!</h1>
					<p>Can you guess all {pokemon.pokemon_species.length} Pok&eacute;mon?!</p>
					<p>Let&#39;s start with 10...</p>
				</Col>
				<Col span={6}>
					{!start ? 
						<>
							<h2>Ready to play?</h2>
							<Button variant="primary" onClick={() => letsGo()}>Let&#39;s go!</Button>
						</>
						: <WhosThatPoke pokemon={pokemon.pokemon_species} />
					}
				</Col>
			</Row>
		</>
	)
}

export default PokeGuess;

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch("https://pokeapi.co/api/v2/generation/1");
	const pokemon = await res.json();

	return {
		props: {
			pokemon,
		}
	}
}