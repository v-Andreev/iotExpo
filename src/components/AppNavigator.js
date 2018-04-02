import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import MainPage from './MainPage';

export const AppNavigator = StackNavigator({
  Main: { screen: MainPage },
}, {
  initialRouteName: 'Main',
});


// const addListener = createReduxBoundAddListener("root")

const AppWithNavigationState = ({ dispatch, nav, addListener })  => {
  return (
    <AppNavigator
      navigation={addNavigationHelpers({
        dispatch,
        state: nav,
        addListener,
      })}
    />
  );
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    nav: state.nav,
  }
}

export default connect(mapStateToProps)(AppWithNavigationState);
