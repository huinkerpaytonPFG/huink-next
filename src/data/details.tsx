export default interface Details {
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