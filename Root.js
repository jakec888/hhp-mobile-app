import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {rootReducer} from './redux/rootReducers';
import rootSagas from './redux/rootSaga';

export default ({children, initialState = {}}) => {
   const ReduxSaga = createSagaMiddleware();

   const middleware = [ReduxThunk, ReduxSaga];

   const composeEnhancers = composeWithDevTools(applyMiddleware(...middleware));

   const store = createStore(rootReducer, initialState, composeEnhancers);

   ReduxSaga.run(rootSagas);

   return <Provider store={store}>{children}</Provider>;
};
