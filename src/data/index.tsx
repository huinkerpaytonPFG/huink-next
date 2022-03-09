import axios from "axios";
import useSWRImuttable from 'swr/immutable';

const fetcher = {
	get: (url: string) => axios.get(url).then((resp) => resp.data)
}


// For the usecase this seemed like overkill to have to add all of the additional things to the app to handle SWR SSR
const usePokemon = (url: string) => {
  const { data, error } = useSWRImuttable(url, fetcher.get)

  return {
    pokemon: data,
    isLoading: !error && !data,
    isError: error
  }
}

export { usePokemon, fetcher };