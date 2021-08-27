import axios, { AxiosInstance } from "axios";
import {pokemonApiEndpoints} from "../utils/Endpoints";

class ApiPokemonProvider {

  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: pokemonApiEndpoints.baseUrl,
      timeout: 1000,
    });
  }

  async getPokemons(nextPageUrl?:string) {
    let response;
    try{
      if(!nextPageUrl) {
        const { data } = await this.api.get(pokemonApiEndpoints.pokemon);
        response = data;
      } else {
        const { data } = await this.api.get(nextPageUrl);
        response = data;
      }
      return response;
    } catch(error) {
      console.log(error);
    }
  }

}

export default new ApiPokemonProvider();