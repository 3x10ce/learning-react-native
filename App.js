import React, {Component} from 'react';
import {Alert, AppRegistry, Button, StyleSheet, View} from 'react-native';

/**
 * ユーザは主にタッチ操作を利用して携帯端末と対話します。
 * ボタンのタップ、リストのスクロールや、マップの拡大といった動作の組み合わせもできます。
 * React Nativeでは、より発展的なジェスチャの認識可能にする
 * 包括的なジェスチャレスポンダシステムと、あらゆる種類の共通なジェスチャを制御するコンポーネントを提供しています。
 * しかし、あなたはおそらく、この簡単なボタンコンポーネントを用いた制御に一番興味があるでしょう。
 * 
 * Buttonは、すべてのプラットフォームに合わせた形でレンダリングされる基本的なボタンのコンポーネントです。
 * ボタンを表示するもっとも簡潔な実装例は、以下のようなものです。
 * 
 * <Button
 *   onPress={() => { Alert.alert('You tapped the button!') }}
 *   title="Press me"
 * />
 * 
 * これはiOSでは青のラベルで、Androidではテキストが書かれた青い長方形として表示されるでしょう。
 * ボタンを押すと"onPress"で指定した関数が呼び出されます。この例ではポップアップが表示されますね。
 * お好みで、"color"プロパティを用いてボタンの色を変更することもできますよ。
 * 
 * さあ、ボタンコンポーネントを使ったサンプルの世界に行って見ましょう。
 */
export default class ButtonBasics extends Component {
  _onPressButton () {
    Alert.alert('君はこのボタンをタップするフレンズなんだね！');
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="押してね"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="押してね"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="すごーい！"
          />
          <Button
            onPress={this._onPressButton}
            title="わかったよ！"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

AppRegistry.registerComponent('LearningReactNative', () => ButtonBasics);