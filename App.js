import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';

/**
 * コンポーネントスタイルに"flex"を使用すると、コンポーネントが使えるスペースの大きさに基づいて大きさを伸ばしたり、縮めたりすることができます。
 * 通常は `flex: 1`を使うでしょう。こうすると親コンポーネントの領域いっぱいに、同じ親に属するコンポーネント間で均等な高さになるように調整されます。
 * より大きなflexが与えられると、兄弟コンポーネント間のflex値の比に基づいてより高い比率のスペースを持つようになります。
 * 
 * ( 親コンポーネントの高さが0より大きい時、子コンポーネントは親コンポーネントの領域いっぱいまでしか広げられません。
 *   もし親コンポーネントの寸法がwidth/heightによる指定、flexによる指定のいずれも使っていない場合、
 *   親コンポーネントの寸法は0となってしまい、子コンポーネントは表示されなくなります。)
 * 
 * コンポーネントサイズの調整方法を覚えた次のステップでは、画面レイアウトの方法を学びます。
 */
export default class FlexDimensionsBasics extends Component {
  render () {
    return (
      // ここの親ビューに書かれてる `flex: 1`を消して見てね。
      // 親ビューに寸法定義がなくなると、子ビューは親ビューに合わせた伸長ができなくなるよ。 
      // `flex: 1`の代わりに、 `height: 300` としてみると、どうなるかな？
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

AppRegistry.registerComponent('LearningReactNative', () => FlexDimensionsBasics);