import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimalListScreen from '../screens/AnimalListScreen';
import AnimalDetailsScreen from '../screens/AnimalDetailsScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='AnimalListScreen'> 
        <Stack.Screen name="AnimalList" component={AnimalListScreen} options={{ title: 'Animais', }} />
        <Stack.Screen name="AnimalDetails" component={AnimalDetailsScreen} options={{ title: 'Detalhe do animal' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
