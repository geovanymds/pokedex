import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import IPokemon from '../../interfaces/IPokemon';
import {useRoute} from '@react-navigation/native';
import generateImageSrcUrl from '../../utils/GenerateImageSrcUrl';
import ApiPokemonProvider from '../../providers/ApiPokemonProvider';
import TypeCard from '../../components/TypeCard/TypeCard';
import StatsChart from '../../components/StatsChart/StatsChart';
import styles from './styles';
interface Props {
  selectedPokemon: IPokemon;
}

const PokemonInfo: React.FC<Props> = () => {
  const route = useRoute<any>();
  const selectedPokemon = route.params.selectedPokemon;
  const [pokemon, setPokemon] = useState<IPokemon | null>(selectedPokemon);

  async function fetchPokemonInfo() {
    try {
      const pokemonInfo = await ApiPokemonProvider.getPokemon(pokemon!.name);
      console.log('CHAMOU');
      if (!pokemonInfo) {
        throw new Error('Erro ao encontrar pokémon.');
      } else if (!pokemon?.height) {
        setPokemon({url: pokemon!.url, name: pokemon!.name, ...pokemonInfo});
      }
    } catch (error) {
      console.log(error);
    }
  }
  fetchPokemonInfo();

  return (
    <View style={styles.container}>
      {pokemon && pokemon.types && pokemon.types.length > 0 && (
        <View>
          <Image
            source={{
              uri: !!pokemon.url
                ? generateImageSrcUrl(pokemon.url)
                : 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
            }}
            style={styles.image}
          />
          <View style={styles.typesContainer}>
            {pokemon.types?.map((type, index) => {
              return (
                <TypeCard key={index} type={type}>
                  {type}
                </TypeCard>
              );
            })}
          </View>
          <View style={styles.physicalStatsContainer}>
            <View style={styles.heightAndWeight}>
              <Text style={styles.text}>Height</Text>
              <Text style={styles.text}>
                {pokemon.height
                  ? +pokemon.height / 10 + ' m'
                  : 'Não disponível'}
              </Text>
            </View>
            <View style={styles.heightAndWeight}>
              <Text style={styles.text}>Weight</Text>
              <Text style={styles.text}>
                {pokemon.weight
                  ? +pokemon.weight / 10 + ' Kg'
                  : 'Não disponível'}
              </Text>
            </View>
          </View>
          <View style={styles.statsChart}>
            <StatsChart stats={pokemon.stats} />
          </View>
        </View>
      )}
    </View>
  );
};

export default PokemonInfo;
