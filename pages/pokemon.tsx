import { usePokemon } from "../src/data";
import Button from "@pds-react/button";
import {Row, Col} from "@pds-react/grid";
import Card, { CardSection, CardTitle } from "@pds-react/card";
import react, { useState } from "react";

interface Pokemon {
	name: string,
	url: string
}

const Home = () => {
	const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
	const { pokemon, isError, isLoading } = usePokemon(url)

	return (
		<main>
			<h1>Learn more about the mons</h1>
				<>
					<Row equalHeight={true}>
						{pokemon?.results && pokemon?.results.map(({ name }: Pokemon) => (
							<Col span={4} key={name}>
								<Card>
									<CardSection>
										<CardTitle>{name}</CardTitle>
										<p>Stuff</p>
										<Button variant="primary">Learn more<span className="sr-only">about {name}</span></Button>
									</CardSection>
								</Card>
							</Col>
						))}
					</Row>
		
					<div>
						{pokemon?.previous ?
							<Button variant="primary-white-fill" onClick={() => setUrl(pokemon.previous)}>Previous</Button> :
							<Button disabled>Previous</Button>
						}
						<span style={{float: "right"}}>
							{pokemon?.next ?
								<Button variant="primary-white-fill" onClick={() => setUrl(pokemon.next)}>Next</Button> :
								<Button disabled>Next</Button>
							}
						</span>
					</div>
				</>
		</main>
	)
}


export default Home;