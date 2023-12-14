import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux'; // Import your Redux store
import RootComponent from './App'; // Import your RootComponent or App component

const Main = () => (
  <Provider store={store}>
    <RootComponent />
  </Provider>
);

AppRegistry.registerComponent('lab2t', () => Main); 