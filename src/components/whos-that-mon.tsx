export const WhosThatPoke = () => {
	// Will have to use SWR to fetch.
	// Have to exclude the guess that has already happened? Should they be exluded from the random list as well? 

	// const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1500");
	// const pokemon = await res.json();
	// const guess = await fetch(pokemon.results[Math.floor(Math.random() * pokemon.results.length)].url);

	return (
		<>
			<h2>Guess that Poke</h2>
		</>
	)
}

export default WhosThatPoke;