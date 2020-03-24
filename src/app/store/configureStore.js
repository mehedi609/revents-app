import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

export const configureStore = () =>
  createStore(rootReducer, devToolsEnhancer());
