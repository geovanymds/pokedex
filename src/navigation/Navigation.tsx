import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingPage from './../screens/LoadingPage/LoadingPage';
import PokedexList from '../screens/PokedexList/PokedexList';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen
          name="LoadingPage"
          component={LoadingPage}
          options={{headerShown: false}}
        />
        <Stack.Screen name="PokedexList" component={PokedexList} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;