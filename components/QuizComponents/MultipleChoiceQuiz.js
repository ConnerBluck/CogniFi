/* eslint-disable react/prop-types */
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
import PromptBox from './PromptBox';
import QuizAnswers from './QuizAnswers';
import ProgressBar from './ProgressBar';
import useCurrentUser from "../../utils/UseCurrentUser";
import {storeToken, getToken} from '../../utils/UserStorage';
import { useNavigation, NavigationActions, StackActions } from '@react-navigation/native';

const MultipleChoiceQuiz = (props) => {
    const navigation = useNavigation();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [user, updateCurrentUser] = useCurrentUser();
    const [progress, setProgress] = useState(0);
    //Don't do this...
    const [nukeState, setnukeState] = useState(false);
    const totalQuestions = props.questions.length;
    const getAnswers = (question, rightAnswer) => {
        let first_answers = [];
        let i = 0;
        if(question < totalQuestions){
        while(i < 4){
            first_answers[i] = {text: props.questions[question].WrongAnswers[i], correct: false};
            i++;
        }
        first_answers[rightAnswer] = {text: props.questions[question].RightAnswers[0], correct: true};
        console.log(first_answers);
        return first_answers;
    }
    else { return {}}
    }
    const [answers, setAnswers] = useState(getAnswers(0, Math.floor(Math.random() * 3)));
    const incrementQuestion = () => {
        //React batches trivial state hook updates
        setCurrentQuestion(currentQuestion + 1);
        setProgress(((currentQuestion + 1) / totalQuestions) * 100);
        setAnswers(getAnswers((currentQuestion + 1), Math.floor(Math.random() * 3)));
        //Sometimes the "R E A C T" way is the hard way so we just do it the wrong way...
        setnukeState(!nukeState);
    }
    const updateUserState = () => {
        let copy = {}
        Object.assign(copy, user);
        console.log(copy);
        copy.badges.firstQuiz = 1;
        storeToken(copy).then(res => {
          getToken().then(res => {
            console.log(res);
              navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              })
          })
        }
        )
      }
    if(user === null){
        return(<Text>loading</Text>)
      }
    if(currentQuestion >= totalQuestions){
        updateUserState();
        return (
            <View style={styles.container}> 
                <View style={{flex: 1}}><ProgressBar progress={progress}/></View>     
                <View style={{flex: 12}}><Text>Quiz Finished!</Text></View>
            </View>
        )
    }
    return (
        <View style={styles.container}>      
            <View style={{flex: 1}}><ProgressBar progress={progress}/></View>
            <View style={{flex: 4,  alignItems: "center", justifyContent: "center"}}><PromptBox content={props.questions[currentQuestion].Question}/></View>
            <View style={{flex: 8}}><QuizAnswers key={nukeState} answers={answers} updateQuestion={incrementQuestion}/></View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        display: "flex", 
        flexDirection: "column", 
        alignContent: "space-between", 
        justifyContent: "center"
    }
});
export default MultipleChoiceQuiz;