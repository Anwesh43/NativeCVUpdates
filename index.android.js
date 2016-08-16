/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import {RoundRectView,CircleView,TriangleView} from './NativeCustomViews'
class NativeCVUpdates extends Component {
  constructor(props){
    super(props);
    this.state = {cx:0,rRotate:0}
  }
  componentDidMount() {
      setInterval(()=>{
        console.log(this.refs.roundRect.props.deg)
        cx = this.state.cx+10
        rRotate = this.state.rRotate+10
        w = Dimensions.get("window").width
        if(cx > w) {
          cx = 0
        }
        this.setState({cx,rRotate})
      },100)
  }
  render() {
    return (
      <View style={{flex:1,flexDirection:'column', backgroundColor: '#F5FCFF'}}>

          <CircleView x={this.state.cx} y= {0} width={80} height={80} backgroundColor="#2196F3">
          </CircleView>
          <RoundRectView ref="roundRect" x={Dimensions.get('window').width/2-40} y= {100} width={80} height={80} deg={0} degY={this.state.rRotate} degX={0} backgroundColor="#2196F3">
          </RoundRectView>
          <TriangleView x={Dimensions.get('window').width/2-40} y= {200} w={80} h={80} deg={this.state.rRotate} backgroundColor="#2196F3">
          </TriangleView>
      </View>);
  }
}


AppRegistry.registerComponent('NativeCVUpdates', () => NativeCVUpdates);
