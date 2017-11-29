import React, {Component} from 'react';
import {AppRegistry, Text, TextInput, View} from 'react-native';

/**
 * TextInput はユーザからの入力を可能にする基本亭なコンポーネントです。
 * これは、入力を受けるたびに与えられた関数を呼び出されるonChangeTextプロパティと、
 * テキストが書き込まれた時に与えられた関数を呼び出すonSubmitEditingプロパティを持ちます。
 * 
 * たとえば、ユーザが入力した単語を異なる言語に翻訳する昨日を作って見ましょう。
 * この革新的な言語は、入力された文章のそれぞれの単語は同じピザ(🍕)で表されます。
 * そのため、"Hello there Bob"という分は、"🍕　🍕　🍕"に翻訳されるのです。
 * 
 * この例では、入力された値はコンポーネントが生成されたあとも変化するため、stateからtextを取り出しています。
 * 例えば、ユーザが入力するたびに、その値の検証(validate)をすることができるでしょう。
 * よりたくさんの利用例を知りたい場合は、React docs on controll componentsか、
 * reference docs for TextInputを参照してください。
 * 
 * https://facebook.github.io/react/docs/forms.html
 * https://facebook.github.io/react-native/docs/textinput.html
 * 
 * テキストの入力はユーザとアプリケーションの対話を実現する手段のひとつです。
 * 次は、他の入力の受け取りについて探し、タッチの制御について学びましょう。
 */

export default class PizzaTranslator extends Component {
  constructor (props) {
    super(props);
    this.state = {text: ''};
  }

  render () {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('LearningReactNative', () => PizzaTranslator);