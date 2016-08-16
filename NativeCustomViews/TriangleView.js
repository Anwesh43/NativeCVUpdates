import React,{Component} from 'react'
import {View} from 'react-native'
export default class TriangleView extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        triangleStyle = {width:0,height:0,borderTopWidth:this.props.h,borderRightWidth:this.props.w/2,borderLeftWidth:this.props.w/2,borderRightColor:'transparent',borderLeftColor:'transparent',borderTopColor:this.props.backgroundColor,transform:[{translateX:this.props.x},{translateY:this.props.y},{rotate:`${this.props.deg}deg`}]}
        return <View style={triangleStyle}></View>
    }
}
