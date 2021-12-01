export default interface Details {
	abilities: [{}],
	forms: [{
		name: string,
		url: string
	}],
	name: string,
	id: number,
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
	}
}