import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';

/**
 * コンポーネントは、flexboxを使用して
 * コンポーネントの子に対してレイアウトを指定することがができます。
 * Flexboxは異なる画面サイズに対して一貫したレイアウトを提供できるよう設計されています。
 * 正しいレイアウトを実現するためには、flexDimension, alignItems, そして
 * justifyContent を組み合わせて使用することが一般的です。
 * 
 * Flexboxは、いくつかの例外はありますがWebにおけるCSSと同じような働きをReact Native上で行います。
 * デフォルト値は異なっており、flexDirectionでは`row`ではなく`column`、
 * そして`flex`のパラメータは単一の数値のみがサポートされています。
 * 
 * flexDimensionを追加したコンポーネントのスタイルは、
 * そのレイアウトの**primary axis**(主軸)を決定します。
 * 子要素は、水平方向('row')と垂直方向('column')のどちらに整列すべきでしょうか？
 * そのデフォルトは 'column'です。
 */
export default class FlexDirectionBasics extends Component {
  render () {
    return (
      // `flex Direction`の設定項目を`column`に変えてみてね
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// もしCreate React Native Appを使っているなら、この行は飛ばしてね
AppRegistry.registerComponent('LearningReactNative', () => FlexDirectionBasics);