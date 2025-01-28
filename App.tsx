

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { IntroScreen } from './src/screens/IntroScreen';
import { HomeScreen } from './src/screens/HomScreen';
import { ExercisesScreen } from './src/screens/ExercisesScreen';
import { RootStackParamList } from './src/navigation/RootStackParamList';
import { ExercisesDetails } from './src/screens/ExercisesDetailsScreen';

const Stack = createStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='InroScreen'>
        <Stack.Screen name="InroScreen" component={IntroScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ExercisesScreen" component={ExercisesScreen} options={{headerShown:false, presentation:'modal'}}/>
        <Stack.Screen name="ExercisesDetailScreen" component={ExercisesDetails} options={{headerShown:false, presentation:'modal'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
