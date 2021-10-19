import {pokemonApiEndpoints, pokemonImagesBaseUrl} from './Endpoints';

export function getPokemonNumber(uriPokemonInfo: string): string {
  return uriPokemonInfo
    .replace(`${pokemonApiEndpoints.baseUrl}${pokemonApiEndpoints.pokemon}`, '')
    .split('/')[1];
}

export function generateImageSrcUrlByNumber(pokemonNumber: string): string {
  let imageUrl = pokemonImagesBaseUrl;
  if (+pokemonNumber < 100 && +pokemonNumber >= 10) {
    imageUrl = `${imageUrl}0${pokemonNumber}.png`;
  } else if (+pokemonNumber < 10) {
    imageUrl = `${imageUrl}00${pokemonNumber}.png`;
  } else {
    imageUrl = `${imageUrl}${pokemonNumber}.png`;
  }
  return imageUrl;
}
