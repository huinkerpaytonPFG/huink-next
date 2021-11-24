import axios from "axios";
import useSWRImuttable from 'swr/immutable';

const fetcher = {
	get: (url: string) => axios.get(url).then((resp) => resp.data)
}

const usePokemon = (url) => {
  const { data, error } = useSWRImuttable(url, fetcher.get)

  return {
    pokemon: data?.results,
    isLoading: !error && !data,
    isError: error
  }
}

export { usePokemon };