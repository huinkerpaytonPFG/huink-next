import { atom } from 'jotai';

export interface PokemonRequest{
	results: [{
		name: string,
		url: string
	}]
}

export const pokedex = atom<Partial<PokemonRequest>>({});


