import React, {useState} from 'react';
import {SafeAreaView, TextInput, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IPokemon from '../../interfaces/IPokemon';

import styles from './styles';

const SearchBar: React.FC = () => {
  const [pokemonSearch, setPokemonSearch] = useState('');
  const navigation = useNavigation<any>();

  function navigateToPokemonInfo() {
    const selectedPokemon:IPokemon = {name:pokemonSearch.toLocaleLowerCase()}
    console.log(selectedPokemon);
    navigation.navigate('PokemonInfo', {selectedPokemon});
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.text} onChangeText={setPokemonSearch} value={pokemonSearch} inlineImageLeft='../../assets/search.svg'/>
      <TouchableOpacity onPress={navigateToPokemonInfo}>
      <Image
        source={require('../../assets/images/search.png')}
        style={styles.image}
      />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SearchBar;
