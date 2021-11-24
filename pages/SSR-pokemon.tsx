import { GetServerSideProps } from "next";
import  useSWR, { SWRConfig } from 'swr';
import axios from "axios";
import Button from "@pds-react/button";
import {Row, Col} from "@pds-react/grid";
import Card, { CardSection, CardTitle } from "@pds-react/card";
import react, { useState } from "react";

const fetcher = {
	get: (url: string) => axios.get(url).then((resp) => resp.data)
}

const API = "https://pokeapi.co/api/v2/pokemon?limit=20";

interface Pokemon {
	name: string,
	url: string
}

// export const getStaticProps: GetServerSideProps = async (context) => {
// 	const pokemonAPI = await fetcher.get(API);

// 	return {
// 		props: {
// 			fallback: {
// 				[API]: pokemonAPI
// 			}
// 		}
// 	}

// }

const Home = () => {
	// Use state to set the url since it comes back in the request for the next one.
	const [url, setUrl] = useState(API);
	// Initial call should be happening serverside
	const { data: pokemonList } = useSWR(url, fetcher.get)

	return (
		<p>This page doesnt do anything yet.. maybe someday</p>
		// <SWRConfig value={{ fallback }}>
		// 	<main>
		// 		<h1>Learn more about the mons</h1>
		// 		<Row equalHeight={true}>
		// 			{pokemonList?.results && pokemonList.results.map(({ name }: Pokemon) => (
		// 				<Col span={4}>
		// 					<Card>
		// 						<CardSection>
		// 							<CardTitle>{name}</CardTitle>
		// 							<p>Stuff</p>
		// 							<Button variant="primary">Learn more<span className="sr-only">about {name}</span></Button>
		// 						</CardSection>
		// 					</Card>
		// 				</Col>
		// 			))}
		// 		</Row>
			
		// 		<div>
		// 			{pokemonList?.previous ?
		// 				<Button variant="primary-white-fill" onClick={() => setUrl(pokemonList.previous)}>Previous</Button> :
		// 				<Button disabled>Previous</Button>
		// 			}
		// 			<span style={{float: "right"}}>
		// 				{pokemonList?.next ?
		// 					<Button variant="primary-white-fill" onClick={() => setUrl(pokemonList.next)}>Next</Button> :
		// 					<Button disabled>Next</Button>
		// 				}
		// 			</span>
		// 		</div>
		// 	</main>
		// </SWRConfig>
	)
}


export default Home;