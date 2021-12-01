import { GetServerSideProps } from 'next';
import { Row, Col } from "@pds-react/grid";
import Card, { CardSection, CardTitle, CardImage } from "@pds-react/card";
import axios from "axios";
import PokeDetails from "../../src/data/details"

export interface Props {
	pokemon: PokeDetails,
}

const Details = ({ pokemon }: Props) => {
	const monNumber = (num: number) => num.toString().padStart(3, "0")
	return (
		<>
			{!pokemon? 
				<p>Loading pokemon</p> :
				<>
					<h1 style={{textTransform: "capitalize"}}>{pokemon.name} #{monNumber(pokemon.id)}</h1>
					<Row className="pds-util-margin-top-20">
						<Col lg={5}>
							<Card>
								<CardImage style={{ height: "auto", margin: "auto" }} src={pokemon.sprites.other["official-artwork"].front_default} alt={`Image of ${pokemon.name} from the front profile`} />
							</Card>
						</Col>
					</Row>
				</>
			}
		</>
	)
}

export default Details;

export const getServerSideProps: GetServerSideProps = async ({query}) => {
	const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query.id}`).then((resp) => resp.data)
	// const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.id}`);
	// const pokemon = await res.json();
	return {
			props: { pokemon },
	};
}
