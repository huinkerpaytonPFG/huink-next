import { GetServerSideProps } from 'next';
import { Row, Col } from "@pds-react/grid";
import Card, { CardImage } from "@pds-react/card";
import PokeDetails from "../../src/data/details"
import styles from "../../styles/details.module.css";

export interface Props {
	pokemon: PokeDetails,
	evolution: any,
	species: any,
}

const Details = ({ pokemon, species }: Props) => {
	const monNumber = (num: number) => num.toString().padStart(3, "0");
	console.log(species);

	return (
		<>
			{!pokemon? 
				<p>Loading pokemon</p> :
				<>
					<h1 className="pds-typography-bold pds-typography-center pds-util-margin-bottom-40" style={{textTransform: "capitalize"}}>{pokemon.name} #{monNumber(pokemon.id)}</h1>
					<Row className="pds-util-margin-top-20">
						<Col lg={5} offset={1}>
							<Card className="pds-color-bg-primary-gray-5 pds-util-padding-20">
								<CardImage style={{ height: "auto", margin: "auto" }} src={pokemon.sprites.other["official-artwork"].front_default} alt={`Image of ${pokemon.name} from the front profile`} />
							</Card>
						</Col>
						<Col lg={5}>
							<Card className="pds-color-bg-primary-blue-1 pds-color-font-white">
								<dl className={styles.pokemonList}>
									<dt>Height</dt>
									<dd>{pokemon.height}</dd>
									<dt>Weight</dt>
									<dd>{pokemon.weight}</dd>
									<dt>Abilities</dt>
									<dd>
										<ul>
											{pokemon.abilities.filter(ability => ability.is_hidden === true ).map(({ ability }) => <li key={ability.name}>{ability.name}</li>)}
										</ul>
									</dd>
								</dl>
							</Card>
							<h2 className="pds-typography-h3">Type</h2>
							<ul>
								{pokemon.types.map(({ type }) => <li key={type.name}>{type.name}</li>)}
							</ul>
						</Col>
					</Row>
					{/* <Row>
						<h2>Evolutions</h2>
						<ul>
							{evolution.chain.evolves_to.map(({ species }) => (
								<li>{species.name}</li>
							))}
						</ul>
						<h2>Forms</h2>
						
					</Row> */}
				</>
			}
		</>
	)
}

export default Details;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	// const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query.id}`, { proxy: false }).then((resp) => resp.data)
	// const species = await axios.get(pokemon.species.url, { proxy: false }).then((resp) => resp.data);
	// const evolution = await axios.get(species.evolution_chain.url, { proxy: false }).then((resp) => resp.data);
	const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.id}`).then(res => res.json());
	const species = await fetch(pokemon.species.url).then(resp => resp.json());
	// const evolution = await fetch(species.evolution_chain.url).then(resp => resp.json());

	return {
			props: { 
				pokemon,
				// evolution,
				species
			},
	};
}
