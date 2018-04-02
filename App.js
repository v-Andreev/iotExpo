import React from 'react';
import AppWithNavigationState from './src/components/AppNavigator';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {createReactNavigationReduxMiddleware, createReduxBoundAddListener} from 'react-navigation-redux-helpers';
import AppReducer from './src/reducers/AppReducer';

const addListener = createReduxBoundAddListener("root");

export default class App extends React.Component {

  store = createStore(
    AppReducer,
    applyMiddleware(createReactNavigationReduxMiddleware(
      "root",
      state => state.nav,
    )
    ),
  );

  render() {

    return (
      <Provider store={ this.store }>
        <AppWithNavigationState addListener={ addListener } />
      </Provider>
    );
  }
}

