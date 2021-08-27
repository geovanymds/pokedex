 import React from 'react';
 import {
   View,
   Animated,
   Easing
 } from 'react-native';

import styles from "./styles";
 
const LoadingPage = () => {

  const spinValue = new Animated.Value(0);

  Animated.timing(
    spinValue,
  {
    toValue: 1,
    duration: 750,
    easing: Easing.linear,
    useNativeDriver: true
  }
  ).start();

const spin = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg']
});
   return (
     <View style={styles.container}>
      <Animated.Image
        style={[styles.logo,{transform: [{rotate: spin}] }]}
        source={require("../../assets/images/pokebola.png")}
      />
     </View>
   );
 };
 
 export default LoadingPage;
 