import React, {useState} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import generateImageSrcUrl from '../../utils/GenerateImageSrcUrl';
import IPokemon from '../../interfaces/IPokemon';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import * as colors from '../../global/styles/colors';
import styles from './styles';

interface Props {
  pokemon: IPokemon;
}
const PokemonCard: React.FC<Props> = ({pokemon}) => {
  const navigation = useNavigation<any>();
  const [pokemonInfo] = useState<IPokemon>(pokemon);
  function navigateToPokemonInfo(selectedPokemon: IPokemon) {
    navigation.navigate('PokemonInfo', {selectedPokemon});
  }

  return (
    <TouchableOpacity onPress={() => navigateToPokemonInfo(pokemon)}>
      <LinearGradient
        colors={[colors.softGray, colors.darkGray]}
        style={styles.container}
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}>
        <Image
          source={{
            uri: !!pokemonInfo.url
              ? generateImageSrcUrl(pokemonInfo.url)
              : 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
          }}
          style={styles.image}
        />
        <Text style={styles.name}>{pokemonInfo.name.toUpperCase()}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PokemonCard;
