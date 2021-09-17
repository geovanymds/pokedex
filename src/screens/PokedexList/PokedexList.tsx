import React, {useState, useEffect, useCallback} from 'react';
import {FlatList} from 'react-native';
import ApiPokemonProvider from '../../providers/ApiPokemonProvider';
import IPokemon from '../../interfaces/IPokemon';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Loading from '../../components/Loading/Loading';
// import styles from "./styles";
const PokedexList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [nextPageUrl, setnextPageUrl] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const renderItem = useCallback(
    ({item}: any) => <PokemonCard pokemon={item} />,
    [],
  );

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
  }, []);

  return pokemonList.length > 0 ? (
    <FlatList
      keyboardShouldPersistTaps="never"
      columnWrapperStyle={{justifyContent: 'center'}}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={pokemonList}
      renderItem={renderItem}
      keyExtractor={item => item.name}
      onEndReached={fetchPokemons}
      onEndReachedThreshold={0.2}
      initialNumToRender={10} // Vary According to your screen size take a lumsum according to your item height
      removeClippedSubviews={true}
    />
  ) : (
    <Loading />
  );
};

export default PokedexList;
