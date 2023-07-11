import React from 'react';
import store from './store/store';
import AppNavigator from './AppNavigator';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider> 
  );
}
