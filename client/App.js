import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
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

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar translucent backgroundColor='transparent' />
        <Stack.Navigator initialRouteName='TabScreens'>
          <Stack.Screen
            name='TabScreens'
            component={TabScreens}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='MovieDetails'
            component={MovieDetails}
            options={({ route }) => ({ headerShown: false })}
          />
          <Stack.Screen
            name='MovieCollection'
            component={MovieCollection}
            options={({ route }) => ({
              title: route.params.headerTitle,
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            })}
          />
          <Stack.Screen
            name='Trailer'
            component={Trailer}
            options={() => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name='SignUp'
            component={SignUp}
            options={{
              title: '회원가입',
              headerStyle: styles.headerContainer,
              headerTintColor: '#fff',
              headerTitleStyle: styles.headerText,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'black',
  },
  headerText: {
    fontWeight: 'bold',
  },
});

export default App;
