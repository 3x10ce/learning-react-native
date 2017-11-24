import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';

/**
 * コンポーネントの幅(width)と高さ(height)は、画面サイズによって決まります。
 * 
 * コンポーネントの幅と大きさを設定する最もシンプルな方法は、固定のwidth, heightをスタイル設定で定義することです。
 * React Nativeのすべての次元は単位がなく、密度に依存しないピクセル数です。
 * この方法によって設定されたコンポーネントは、スクリーンサイズに関係なく、
 * 常に同じサイズで共通に表示されるコンポーネントとなります。
 */
export default class FixedDimensionsBasics extends Component {
  render () {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}



AppRegistry.registerComponent('LeaningReactNative', () => FixedDimensionsBasics)