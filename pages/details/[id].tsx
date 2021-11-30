import { useRouter } from 'next/router'
import { usePokemon } from "../../src/data";
import { Row, Col } from "@pds-react/grid";
import Card, { CardSection, CardTitle, CardImage } from "@pds-react/card";

const Details = () => {
	const router = useRouter()
	const { id: mon } = router.query
	const { pokemon, isError, isLoading } = usePokemon(`https://pokeapi.co/api/v2/pokemon/${mon}`)

	return (
		<>
			{isLoading ? 
				<p>Looking for {mon}</p> :
				<>
					<Row className="pds-util-margin-top-20">
						<Col lg={10}>
							<Card>
								<CardSection>
									<CardTitle as="h1">Details for {mon}</CardTitle>
								</CardSection>
								<CardImage style={{ height: "auto", margin: "auto" }} src={pokemon.sprites.other["official-artwork"].front_default} alt={`Image of ${mon} from the front profile`} />
							</Card>
						</Col>
					</Row>
				</>

			}
		</>
	)
}

export default Details;