import { atom } from 'jotai';

export interface PokemonRequest{
	results: Array<{
		name: string,
		url: string
	}>
}

export const pokedex = atom<Partial<PokemonRequest>>({});


