import * as React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './containers/BottomTab/BottomTab';
import Movie from './containers/Home/Movie';
import Collection from './components/Home/screen/Collection/Collection';
import Trailer from './components/Home/screen/Movie/component/Trailer';
import SignUp from './components/Auth/screen/SignUp';
import reducer from './reducers';

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
  { name: 'BottomTab', component: BottomTab, options: headerShown },
  { name: 'Movie', component: Movie, options: headerShown },
  { name: 'Collection', component: Collection, options: headerStyle },
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
        <Stack.Navigator initialRouteName='BottomTab'>
          {stackScreens.map((screen, screenIdx) => (
            <Stack.Screen
              key={screenIdx}
              name={screen.name}
              component={screen.component}
              options={({ route }) =>
                screen.name === 'Collection'
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
