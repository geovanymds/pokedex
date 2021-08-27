import React, { useState, useEffect } from 'react';
import {
  Text,
  FlatList
} from 'react-native';
import ApiPokemonProvider from '../../providers/ApiPokemonProvider';
import IPokemon from '../../interfaces/IPokemon';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
// import styles from "./styles";
const PokedexList: React.FC = () => {

  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [nextPageUrl, setnextPageUrl] = useState<string>('');
  const [loading, setLoading] = useState(false);

  async function fetchPokemons() {
    if (loading) {
      return;
    }

    if (pokemonList.length === 1118) {
      return;
    }

    setLoading(true);

    const response = await ApiPokemonProvider.getPokemons(nextPageUrl);

    setPokemonList([...pokemonList, ...response.results]);
    setnextPageUrl(response.next);
    setLoading(false);
  }

  useEffect(() => {
    fetchPokemons();
  });

  return (pokemonList.length > 0 ?
    <FlatList
      columnWrapperStyle={{ justifyContent: 'center' }}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={pokemonList}
      renderItem={({ item }: any) => (
        <PokemonCard pokemon={item} />
      )}
      keyExtractor={item => item.name}
    /> : <Text>Vazio</Text>
  );
};

export default PokedexList;
