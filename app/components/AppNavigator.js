import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import MainPage from './MainPage';
import ChooseColorPage from './ChooseColorPage'

export const AppNavigator = StackNavigator({
  Main: { screen: MainPage },
  ChooseColor: {
    screen: ChooseColorPage,
   /* navigationOptions: {
      headerLeft: null,
    }*/
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
