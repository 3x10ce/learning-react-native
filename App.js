import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
  constructor (props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return {showText: !previousState.showText};
      })
    }, 1000);
  }

  render () {
    let display = this.state.showText ? this.props.text : '';
    return (
      <Text>{display}</Text>
    )
    
  }
}

export default class BlinkApp extends Component {
  render () {
    return (
      <View>
        <Blink text="I love to blink!" />
        <Blink text="Yes blinking is so great!" />
        <Blink text="コンポーネントにはpropsとstateという2つのタイプがあります。" />
        <Blink text="propsは親によってセットされ、これらはコンポーネントのライフサイクルに固定されます。" />
        <Blink text="データを変更する予定がある場合には、stateを使います。" />
        <Blink text="一般的に、コンストラクタでstateを初期化し、stateに変更を加える時はsetStateを用いるべきです。" />
        <Blink text="例えば、常にチカチカするテキストを作りたいとしましょう。テキストはチカチカコンポーネントを生み出した時に1回セットし、それはpropsに入ります。" />
        <Blink text="「今この時、テキスト表示はONかOFFか」は時間で変化しますので、この情報はstateに保持するべきです。" />
        <Blink text="" />
        <Blink text="" />
        <Blink text="" />
        </View>
    );
  }
}

AppRegistry.registerComponent('LearningReactNative', () => BlinkApp);