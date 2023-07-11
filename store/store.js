import { configureStore, combineReducers } from '@reduxjs/toolkit';
import settingsReducer from './todoReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  reducer: {
    todos: todoReducer,
    settings: settingsReducer,
  },
});

const store = configureStore(rootReducer)

export default store;
