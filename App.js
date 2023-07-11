// import { StatusBar } from 'expo-status-bar';
import store from './store/store';
import AppNavigator from './AppNavigator';
import { Provider } from 'react-redux';
// import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider> 
  );
}
