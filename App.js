import React, {Component} from 'react';
import {AppRegistry, Image, Text, View} from 'react-native';

class Greeting extends Component {
  render () {
    return (
      <Text> Hello {this.props.name}!</Text>
    );
  }
}
class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render () {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='' />
        <Greeting name='Alice' />
        <Greeting name='Bob' />
        <Bananas />
      </View>
    );
  }
}

AppRegistry.registerComponent('LeaningReactNative', () => LotsOfGreetings)