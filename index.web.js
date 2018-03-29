const React = require('react');
import ReactNative, { AppRegistry, Text } from 'react-native';

import App from './App';

// register the app
AppRegistry.registerComponent('iotExpo', () => App);

AppRegistry.runApplication('iotExpo', {
  initialProps: {},
  rootTag: document.getElementById('root')
});
