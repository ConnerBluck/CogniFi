import React, { useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    ScrollView,
    TextInput,
    Button
  } from 'react-native';
import CognifiTextBox from "../CognifiTextBox";
import Colors from "../../utils/Colors";

const AnswerBox = (props) =>{
    const [color, setColor] = useState("transparent");
    const evaluate = () => {
        if(props.correct){
            setColor("green");
            props.updateQuestion();
        }
        else{
            setColor("red");
        }
    }
    return (
        <TouchableOpacity onPress={() => evaluate()} style={{flex: 1, borderColor: Colors.Cognifi_Green, borderWidth: 1, borderRadius: 5, margin: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: color}}>
            <CognifiTextBox text_style={{fontSize: 25}} text={props.answer}/>
        </TouchableOpacity>
    )
}

//navigation prop needed to move between pages
const QuizAnswers= (props) => {
    return(
        <View style={{flex: 1, display: "flex", flexDirection: "column", alignContent: "space-between", justifyContent: "center"}}>
            <AnswerBox answer={props.answers[0].text} correct={props.answers[0].correct} updateQuestion={props.updateQuestion}/>
            <AnswerBox answer={props.answers[1].text} correct={props.answers[1].correct} updateQuestion={props.updateQuestion}/>
            <AnswerBox answer={props.answers[2].text} correct={props.answers[2].correct} updateQuestion={props.updateQuestion}/>
            <AnswerBox answer={props.answers[3].text} correct={props.answers[3].correct} updateQuestion={props.updateQuestion}/>
        </View>
    )
};
export default QuizAnswers;