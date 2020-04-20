// outsource dependencies
import React, {memo} from 'react';
import {Provider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// local dependencies
import store from './store';
import Home from './screens/Home';
import Gallery from './screens/Gallery';
import {ROUTES} from './constans/routes';


const Stack = createStackNavigator();

const NavigationMiddleware = memo(() => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={ROUTES.HOME}
                     screenOptions={{gestureEnabled: true}}
    >
      <Stack.Screen name={ROUTES.HOME}
                    component={Home}
      />
      <Stack.Screen name={ROUTES.GALLERY}
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
