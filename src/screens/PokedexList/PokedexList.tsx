import React, {useState, useEffect, useCallback} from 'react';
import {FlatList, View} from 'react-native';
import ApiPokemonProvider from '../../providers/ApiPokemonProvider';
import IPokemon from '../../interfaces/IPokemon';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Loading from '../../components/Loading/Loading';
import SearchBar from '../../components/SearchBar/SearchBar';
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
    <View>
      <SearchBar/>
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
        removeClippedSubviews={true}
      />
    </View>
  ) : (
    <Loading />
  );
};

export default PokedexList;
