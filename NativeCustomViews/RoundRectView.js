import React,{Component} from 'react'
import {View} from 'react-native'
export default class RoundRectView extends Component {
    constructor(props){
        super(props)

    }
    render() {
        roundRectStyle = {width:this.props.width,height:this.props.height,borderRadius:20,backgroundColor:this.props.backgroundColor,transform:[{translateX:this.props.x},{translateY:this.props.y},{rotateX:`${this.props.degX}deg`},{rotate:`${this.props.deg}deg`},{rotateY:`${this.props.degY}deg`}]}
        return (<View style={roundRectStyle}>

          </View>)
    }
}
