import React,{Component} from 'react'
import {View} from 'react-native'
export default class CircleView extends Component {
    constructor(props){
        super(props)
    }
    render() {
        circleStyle = {width:this.props.width,height:this.props.height,borderRadius:50,backgroundColor:this.props.backgroundColor,transform:[{translateX:this.props.x,translateY:this.props.y}]}
        return (<View style={circleStyle}>
          </View>)
    }
}
