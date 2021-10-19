import axios, {AxiosInstance} from 'axios';
import {pokemonApiEndpoints} from '../utils/Endpoints';

class ApiPokemonProvider {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: pokemonApiEndpoints.baseUrl,
      timeout: 1000,
    });
  }

  async getPokemons(nextPageUrl?: string) {
    let response;
    try {
      if (!nextPageUrl) {
        const {data} = await this.api.get(pokemonApiEndpoints.pokemon);
        response = data;
      } else {
        const {data} = await this.api.get(nextPageUrl);
        response = data;
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getPokemon(name: string) {
    try {
      if (!name) {
        throw new Error('Error, pokémon not found.');
      }
      const {data} = await this.api.get(
        `${pokemonApiEndpoints.pokemon}/${name}`,
      );
      const pokemon = {
        types: data.types.map((typeObject: any): string => {
          return typeObject.type.name;
        }),
        height: data.height,
        weight: data.weight,
        number: data.id,
        stats: data.stats.map((statObject: any): any => {
          return {
            name: statObject.stat.name,
            baseStat: statObject.base_stat,
          };
        }),
      };
      return pokemon;
    } catch (error) {
      console.log(error);
    }
  }

  async getEvolutionChain(name: string) {
    try {
      if (!name) {
        throw new Error('Error, pokémon not found.');
      }
      const speciesResponse = await this.api.get(
        `${pokemonApiEndpoints.species}/${name}`,
      );
      if (!speciesResponse) {
        throw new Error('Species not found.');
      }
      const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
      const {data} = await axios.get(evolutionChainUrl);
      if (!data) {
        throw new Error('Evolution chain not found.');
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ApiPokemonProvider();
