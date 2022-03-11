import { atom } from 'jotai';
import { PokemonRequest } from "../src/data/pokemon";



export const pokedex = atom<Partial<PokemonRequest>>({});


