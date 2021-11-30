import { useRouter } from 'next/router'
import { usePokemon } from "../../src/data";
import { Row, Col } from "@pds-react/grid";
import Card, { CardSection, CardTitle, CardImage } from "@pds-react/card";

const Details = () => {
	const router = useRouter()
	const { id: mon } = router.query
	const { pokemon, isError, isLoading } = usePokemon(`https://pokeapi.co/api/v2/pokemon/${mon}`)
	const monNumber = (num: number) => num.toString().padStart(3, "0")

	return (
		<>
			{isLoading ? 
				<p>Loading pokemon</p> :
				<>
					<h1 style={{textTransform: "capitalize"}}>{pokemon.name} #{monNumber(pokemon.id)}</h1>
					<Row className="pds-util-margin-top-20">
						<Col lg={5}>
							<Card>
								<CardImage style={{ height: "auto", margin: "auto" }} src={pokemon.sprites.other["official-artwork"].front_default} alt={`Image of ${mon} from the front profile`} />
							</Card>
						</Col>
					</Row>
					<Row>
					</Row>
				</>
			}
		</>
	)
}

export default Details;