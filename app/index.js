import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import AppReducer from './reducers/AppReducer';
import AppWithNavigationState from './components/AppNavigator';

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const addListener = createReduxBoundAddListener("root");


export default class App extends React.Component {
  store = createStore(
    AppReducer,
    composeWithDevTools(
      applyMiddleware(middleware),
    ));

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState addListener={ addListener } />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('IotExpoWebApp', () => IotExpoWebApp);
