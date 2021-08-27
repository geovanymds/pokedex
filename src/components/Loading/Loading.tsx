import React from 'react';
import { View, Animated, Easing } from 'react-native';

import styles from './styles';

const Loading: React.FC = () => {
  const yAxisValueStartValue = new Animated.Value(0);
  const yAxisValueEndValue = 25;
  Animated.loop(
    Animated.spring(yAxisValueStartValue, {
      toValue: yAxisValueEndValue,
      friction: 0,
      useNativeDriver: true,
      velocity: 50
    }),
    {iterations: 1000},
  ).start();
  return (<View style={styles.container}>
    <Animated.Image
      style={[styles.logo, { transform: [{ translateY: yAxisValueStartValue }] }]}
      source={require("../../assets/images/pokebola.png")}
    />
  </View>);
}

export default Loading;