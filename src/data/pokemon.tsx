export interface Mon {
	name: string,
	url: string
}

export interface Pokemon extends Array<Mon> {}

export interface PokemonRequest{
	id: number,
	name: string,
	abilities: [],
	main_region: {
		name: string,
		url: string,
	},
	moves : [{
		name: string,
		url: string,
	}],
	names: [{
		name: string,
		language: {
			name: string,
			url: string,
		}
	}],
	pokemon_species: [{
		name: string,
		url: string,
	}],
	types: [{
		name: string,
		url: string,
	}],
	version_groups: [{
		name: string,
		url: string,
	}],
}

export interface PokeDetails {
	abilities: [{
		ability: {
			name: string,
			url: string
		},
		is_hidden: boolean,
	}],
	forms: [{
		name: string,
		url: string
	}],
	name: string,
	id: number,
	height: string,
	weight: string,
	game_indices: [{}],
	sprites: {
    front_default: string,
    other: {
      dream_world: {
        front_default: string,
      },
      home: {
        front_default: string,
      },
      "official-artwork": {
        front_default: string
      }
		}
	},
	types: [{
		slot: number,
		type: { name: string, url: string }
	}],
}