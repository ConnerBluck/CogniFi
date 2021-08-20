import React, {useState, useEffect} from 'react';
import {Text} from "react-native";

const CognifiTextBox = (props) => {
    let Style = {fontFamily: 'Roboto_100Thin'};
    if(props.text_style){
        Style = Object.assign(props.text_style, {fontFamily: 'Roboto_100Thin'});
    }
    return (
        <Text style={Style}>{props.text}</Text>
    )
}

export default CognifiTextBox;