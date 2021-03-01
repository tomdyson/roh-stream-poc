import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VideoPlayer from './VideoPlayer'
import Cast from './Cast'
import Details from './Details'
import Home from './Home'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: 'black' },
          headerShown: false,
        }}>
        <Stack.Screen name="ROH Stream" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Player" component={VideoPlayer} />
        <Stack.Screen name="Cast" component={Cast} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;