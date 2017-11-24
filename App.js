import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
  render () {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        <Text style={styles.red}></Text>
        <Text style={styles.red}>React Nativeを利用するにあたり、あなたは特別なスタイル定義構文を覚える必要はありません。</Text>
        <Text style={styles.bold}>アプリケーションのスタイルもJavaScriptのみで設定できます。</Text>
        <Text style={[]}>すべてのコンポーネントはstyleプロパティを受け取ることができます。</Text>
        <Text style={[styles.red, styles.bold]}>スタイル名と値の指定は、名前の指定がキャメルケースであることを除いて、ほとんどがWebにおけるCSSの指定方法と一致します。</Text>
        <Text style={styles.bold}>（たとえば、background-colorではなく、backgroundColor）</Text>
        <Text style={styles.red}></Text>
        <Text style={{color: 'green'}}>styleプロパティはプレーンで古いJavaScriptオブジェクトです。</Text>
        <Text style={{fontSize: 24}}>それはもっともシンプルであり、我々がサンプルコードを書く際によく用いるものです。</Text>
        <Text style={[{color: 'green'}, {fontWeight: 'bold'}]}>複数のスタイルを配列で指定することもできます。</Text>
        <Text style={[{color: 'orange'}, {color: 'purple'}]}>その場合、配列の後ろに書いたスタイルの方が優先順位を持ち、前に書いたスタイルを上書きします。</Text>
        <Text style={styles.red}>コンポーネントが複雑になるにつれ、通常はStyleSheet.createを用いていくつかのスタイル定義を1箇所で定義する方法が用いられます。</Text>
        <Text style={[]}></Text>
        <Text style={[]}>一般的なパターンのひとつは、メインコンポーネントで受け取ったstyleプロパティをサブコンポーネントのスタイル定義するために使いまわすことです。</Text>
        <Text style={[]}>これは、CSSで用いられた「階層的な」スタイル定義を実現することができます。</Text>
        <Text style={[]}>ここで挙げた以外にも、テキストのスタイルを定義するたくさんの方法が用意されています。すべてのスタイルのリストを知りたい人は、Text component referenceを読んで見てくださいね。</Text>
        <Text style={[]}></Text>
        <Text style={[]}>これであなたは、テキストを美しくスタイリングする技術を習得しました。</Text>
        <Text style={[]}>スタイルマスターになるための次のステップでは、コンポーネントの大きさを制御する方法を学びます。</Text>
        <Text style={[]}></Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  },
  bold: {
    fontWeight: 'bold'
  }
});


AppRegistry.registerComponent('LearningReactNative', () => LotsOfStyles);