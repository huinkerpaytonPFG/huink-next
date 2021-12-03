import { GetStaticProps } from 'next';
import { Row, Col } from "@pds-react/grid";
import Button from "@pds-react/button";
// import { useAtom } from 'jotai';
import WhosThatPoke from "../src/components/whos-that-mon";
import { pokedex, PokemonRequest } from "../atoms/pokedex-atom";
import react, { useState } from "react";


interface FormData {
  search: string;
}

interface SSRProps {
	pokemon: PokemonRequest
}

const PokeGuess = ({ pokemon }: SSRProps) => {
	const [start, setStart] = useState(false);

	return (
		<>
			<Row>
				<Col span={6}>
					<h1>Who&#39;s that Pok&eacute;mon?!</h1>
					<p>Can you guess all {pokemon.results.length} Pok&eacute;mon?!</p>
					<p>Let&#39;s start with 10...</p>
				</Col>
				<Col span={6}>
					{!start ? 
						<>
							<h2>Ready to play?</h2>
							<Button variant="primary" onClick={() => setStart(true)}>Let&#39;s go!</Button>
						</>
						: <WhosThatPoke />
					}
				</Col>
			</Row>
		</>
	)
}

export default PokeGuess;

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1500");
	const pokemon = await res.json();

	return {
		props: {
			pokemon,
		}
	}
}