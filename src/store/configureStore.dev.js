import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer, initialState}  from './../reducers/index';
import thunk from 'redux-thunk';
 import createHistory from 'history/createBrowserHistory'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStateSyncMiddleware, initStateWithPrevTab } from 'redux-state-sync';

const history = createHistory()
export {history};

export default function configureStore(initialState) {

  const store = composeWithDevTools(applyMiddleware(thunk, createStateSyncMiddleware(initialState)))(createStore)(rootReducer, initialState);
  if (module.hot) {
    module.hot.accept('./../reducers', () => {
      const nextRootReducer = require('./../reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  initStateWithPrevTab(store);

  return store
}