import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux'; 
import RootComponent from './App';

const Main = () => (
  <Provider store={store}>
    <RootComponent />
  </Provider>
);

export default Main
//AppRegistry.registerComponent('lab2t', () => Main); 