import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import MainPage from './src/screens/MainPage';
import FullSizeScreen from './src/screens/fullSizeScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name="Galery" component={MainPage}/>
        <Stack.Screen name="FullSize" component={FullSizeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

