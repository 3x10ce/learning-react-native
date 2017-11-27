import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
/**
 * justifyContentを追加したコンポーネントは、子要素の主軸に沿ったdistoribution(分布)を決定します。
 * 子要素たちは先頭、中央、末尾、均等配置のどれに沿って配置されるべきでしょうか？
 * 利用可能なオプションは `flex-start`, `center`, `flex-end`, `space-around`, そして`space-between`です。
 */
export default class JustifyContentBasics extends Component {
  render () {
    return (
      // `justifyContent`の設定を`center`に変えてみよう
      // `flexDirection`の設定を`row`に変えてみよう
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// Create React Native App を利用している場合は、以下をスキップします。
AppRegistry.registerComponent('LearningReactNative', () => JustifyContentBasics);