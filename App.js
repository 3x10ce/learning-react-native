import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';

/**
 * alignItemsを追加したコンポーネントは、secondary axis(副軸)に沿った子要素の整列方法を決定します。
 * (たとえば、主軸を'row'としたときの副軸は'column'になります。)
 * 子要素は先頭・中央・末尾、そしてコンポーネントいっぱいに伸長して配置、どのように配置されるべきでしょうか？
 * 利用可能なオプションは'flex-start'、'center', 'flex-end', そして'stretch'です。
 * 
 * stretchが効果を発揮するためには、子要素は副軸に対しての固定幅による寸法を持ってはいけません。
 * 以下の例では、alignItems: stretch の指定は子要素から width: 50 を取り除くまで動作しません。
 * 
 * これで基本的な部分は網羅しましたが、この他にもあなたが必要とするであろうたくさんのスタイルが存在します。
 * レイアウトを制御するすべてのプロパティは、以下のドキュメントに掲載されています。
 * https://facebook.github.io/react-native/docs/layout-props.html
 * 
 * 実際のアプリケーション構築に一歩近づいています。
 * 欠けている内容の一つは、ユーザからの入力を得る手段です。
 * さあ、TextInputコンポーネントを用いてテキスト入力を制御する手段を学びましょう！
 */
export default class AlignItemsBasics extends Component {
  render () {
    return (
      // `alignItems`の設定を`flex-start`に変えてみよう
      // `justifyContent`の設定を`flex-end`に変えてみよう
      // `flexDirection`の設定を`row`に変えてみよう
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// Create React Native App を利用している場合は、以下をスキップします。
AppRegistry.registerComponent('LearningReactNative', () => AlignItemsBasics);