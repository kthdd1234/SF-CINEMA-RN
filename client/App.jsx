import * as React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabScreens from './container/TabScreens';
import MovieDetails from './container/MovieDetails';
import MovieCollection from './TabScreens/Home/MovieCollection';
import Trailer from './TabScreens/Home/Trailer';
import SignUp from './TabScreens/Auth/screens/SignUp';
import reducer from './reducer';

const Stack = createStackNavigator();

const store = createStore(
  reducer,
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

const headerShown = { headerShown: false };
const headerStyle = {
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const stackScreens = [
  { name: 'TabScreens', component: TabScreens, options: headerShown },
  { name: 'MovieDetails', component: MovieDetails, options: headerShown },
  { name: 'MovieCollection', component: MovieCollection, options: headerStyle },
  { name: 'Trailer', component: Trailer, options: headerShown },
  {
    name: 'SignUp',
    component: SignUp,
    options: Object.assign({ title: '회원가입' }, headerStyle),
  },
];

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar translucent backgroundColor='transparent' />
        <Stack.Navigator initialRouteName='TabScreens'>
          {stackScreens.map((screen, screenIdx) => (
            <Stack.Screen
              key={screenIdx}
              name={screen.name}
              component={screen.component}
              options={({ route }) =>
                screen.name === 'MovieCollection'
                  ? Object.assign(
                      { title: route.params.headerTitle },
                      screen.options
                    )
                  : screen.options
              }
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
