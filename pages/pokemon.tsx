import { usePokemon } from "../src/data";
import Button from "@pds-react/button";
import {Row, Col} from "@pds-react/grid";
import Card, { CardSection, CardTitle } from "@pds-react/card";
import react, { useState } from "react";
import Input from "../src/react-hook-form-components/input";
import { FormProvider, useForm } from "react-hook-form";

interface Pokemon {
	name: string,
	url: string
}

interface FormData {
  search: string;
}

const Home = () => {
	const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=1000");
	const { pokemon, isError, isLoading } = usePokemon(url)
	const formContext = useForm<FormData>({
		mode: "onChange",
    defaultValues: { search: "" },
	});

	const watchSearch = formContext.watch("search", "");
	const filteredPokemon = pokemon?.results.filter(({ name }: Pokemon) => name.toLowerCase().includes(watchSearch.toLowerCase()));
	const showTheMons = watchSearch.length > 2 && filteredPokemon.length;

	return (
		<main>
			<h1>Find a 'mon</h1>
			{pokemon?.results && (
				<Row>
					<Col lg={10}>
            <FormProvider {...formContext}>
              <form
                noValidate
                onSubmit={formContext.handleSubmit((data) => console.log(data))}
              >
                <Input
                  name="search"
                  type="search"
									label="Find a Pokemon"
									placeholder="Please enter a minimum of 3 characters"
                  id="search"
                  autoComplete="off"
                  required
                />
              </form>
            </FormProvider>
          </Col>
				</Row>
			)}
			<div aria-live="polite" aria-atomic="true">
				{showTheMons ? 
					<p>There are {filteredPokemon.length} Pokemon matching that search</p>
					: watchSearch.length > 2 &&
						<p>There are no mons matching that search</p>
				}
			</div>
			{showTheMons &&
				<Row>
					<Col lg={10}>
						<Card>
							<CardSection>
								<CardTitle as="h2">Search results</CardTitle>
							</CardSection>
							<table className="pds-table">
								<tbody>
									{filteredPokemon.map(({ name }: Pokemon) => (
										<tr key={`${name}-row`}>
											<th scope="row">{name}</th>
											<td><Button variant="primary">Learn more<span className="sr-only">about {name}</span></Button></td>
										</tr>
									))}
								</tbody>
							</table>
						</Card>
					</Col>
				</Row>
			}
		</main>
	)
}


export default Home;