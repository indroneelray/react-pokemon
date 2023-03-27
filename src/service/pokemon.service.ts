import { HTTPClient } from "./http.service";

//-----------------------------Class approach --------------------------//
class PokemonClassService {
  async getPokemonList(params: { limit: Number; offset: Number }) {
    try {
      const { data } = await HTTPClient.get("/pokemon", params);
      return data as { results: { name: string; url: string }[] }; //as per API docs
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async getPokemon(url: string) {
    try {
      const { data } = await HTTPClient.get(url);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

const pokemonClassService = new PokemonClassService();

//------------------------------Function approach---------------------------//

const pokemonService = {
  getPokemonList: async (params: { limit: Number; offset: Number }) => {
    try {
      const { data } = await HTTPClient.get("/pokemon", params);
      return data as { results: { name: string; url: string }[] }; //as per API docs
    } catch (err) {
      return Promise.reject(err);
    }
  },

  getPokemon: async (url: string) => {
    try {
      const { data } = await HTTPClient.get(url);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export { pokemonService, pokemonClassService };
