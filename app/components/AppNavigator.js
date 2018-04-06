import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import MainPage from './MainPage';
import ChooseColorPage from './ChooseColorPage'
import FetchPage from './FetchPage'

export const AppNavigator = StackNavigator({
  Main: { screen: MainPage },
  FetchPage: {
    screen: FetchPage,
    navigationOptions: {
      title: 'Fetch Page',
    }
  },
  ChooseColor: {
    screen: ChooseColorPage,
  },
},
{ initialRouteName: 'Main' });

const AppWithNavigationState = ({ dispatch, nav, addListener }) => (
  <AppNavigator
    navigation={addNavigationHelpers({ dispatch, state: nav, addListener })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
