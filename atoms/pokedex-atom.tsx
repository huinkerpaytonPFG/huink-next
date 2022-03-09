import { atom } from 'jotai';
import { Pokemon, Mon } from "../data/pokemon";



export const pokedex = atom<Partial<PokemonRequest>>({});


