// outsource dependencies
import React, {memo} from 'react';
import {Provider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// local dependencies
import store from './store';
import Home from './screens/Home';
import Gallery from './screens/Gallery';


const Stack = createStackNavigator();

const NavigationMiddleware = memo(() => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{gestureEnabled: true}}>
      <Stack.Screen name="Home"
                    component={Home}
      />
      <Stack.Screen name="Gallery"
                    component={Gallery}
      />
    </Stack.Navigator>
  </NavigationContainer>
));

const App = memo(() => (
  <Provider store={store}>
    <NavigationMiddleware/>
  </Provider>
));

export default App;
