import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, TouchableHighlight, Text } from 'react-native';
import { COLORS } from '../state/Colors.js';

class MainPage extends Component {

  onChooseColor() {
    this.props.navigation.navigate('ChooseColor');
  }
  onFetchPage() {
    this.props.navigation.navigate('FetchPage');
  }

  selectedColor() {
    const { colorName } = this.props;
    return COLORS[colorName].hexCode;
  }

  render() {
    const color = this.selectedColor();
    return (
      <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: color }}>
        <Button
          onPress={this.onChooseColor.bind(this)}
          color="#aaa"
          title="Choose Color" />
        <TouchableHighlight
          style={{
            alignItems: 'center',
            backgroundColor: '#ffffff',
            padding: 10
          }}
          onPress={this.onFetchPage.bind(this)}
        >
          <Text style={{ color: '#6b68bb' }}> Go to FetchPage </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return { colorName: state.color.colorName };
};

export default connect(mapStateToProps)(MainPage);
