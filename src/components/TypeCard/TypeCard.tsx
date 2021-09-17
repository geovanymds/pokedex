import React from 'react';
import {View, Text} from 'react-native';
import {typeColors} from '../../global/styles/colors';

import styles from './styles';

interface Props {
  type: string;
}

const TypeCard: React.FC<Props> = ({type}) => {
  const backgroundColor = {backgroundColor: (typeColors as any)[type]};
  return (
    <View style={[styles.container, backgroundColor]}>
      <Text style={styles.type}>{type}</Text>
    </View>
  );
};

export default TypeCard;
