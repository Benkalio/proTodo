import { configureStore, combineReducers } from '@reduxjs/toolkit';
import settingsReducer from './reducers';
import todoReducer from './reducers';

const rootReducer = combineReducers({
  reducer: {
    todos: todoReducer,
    settings: settingsReducer,
  },
});

const store = configureStore(rootReducer)

export default store;
