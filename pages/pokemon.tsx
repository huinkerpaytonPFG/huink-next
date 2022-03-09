import { GetStaticProps } from 'next';
import Link from 'next/link';
// import { useAtom } from 'jotai';
import Button from "@pds-react/button";
import { Row, Col } from "@pds-react/grid";
import Card, { CardSection, CardTitle } from "@pds-react/card";
import Input from "../src/react-hook-form-components/input";
import { FormProvider, useForm } from "react-hook-form";
import { Pokemon } from "../src/data/pokemon";
// import { pokedex } from "../atoms/pokedex-atom";


interface FormData {
  search: string;
}

interface SSRProps {
	pokemon: Pokemon
}

const PokemonSearch = ({ pokemon }: SSRProps) => {
	const formContext = useForm<FormData>({
		mode: "onChange",
    defaultValues: { search: "" },
	});

	const watchSearch = formContext.watch("search", "");
	const filteredPokemon = pokemon?.filter(({ name }) => name.toLowerCase().includes(watchSearch.toLowerCase()));
	const showTheMons = watchSearch.length > 2 && filteredPokemon.length;
	// const [, setDex] = useAtom(pokedex);

	return (
		<>
			<h1>Find a &#39;mon</h1>
			{pokemon && (
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
					<p>There are <strong>{filteredPokemon.length} Pok&eacute;mon</strong> matching your search</p> :
					<></>
				}
			</div>
			{showTheMons ?
				<Row>
					<Col lg={10}>
						<Card>
							<CardSection>
								<CardTitle as="h2">Search results</CardTitle>
							</CardSection>
							<table className="pds-table">
								<tbody>
									{filteredPokemon.map(({ name }) => (
										<tr key={`${name}-row`}>
											<th scope="row">{name}</th>
											<td className="pds-typography-right">
												<Link href={`details/${name}`} passHref>
													<Button variant="primary-white-fill" as="a">Learn more<span className="sr-only">about {name}</span></Button>
												</Link>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</Card>
					</Col>
				</Row>
			: watchSearch.length > 2 &&
				<p>Oh bugger! There are no mons matching your search</p>
			}
		</>
	)
}

export default PokemonSearch;

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
	const pokemon = await res.json();

	return {
		props: {
			pokemon,
		}
	}
}