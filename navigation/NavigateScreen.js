import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import App from '../App';
import SettingsScreen from '../screens/SettingsScreen';


const AppNavigator = createBottomTabNavigator({
  TodoList: { screen: TodoListScreen },
  Settings: { screen: SettingsScreen },
});

export default createAppContainer(AppNavigator);
