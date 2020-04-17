/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Gallery" component={Gallery} />
          {/*<Stack.Screen name="Profile" component={Profile} />*/}
          {/*<Stack.Screen name="Settings" component={Settings} />*/}
        </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
