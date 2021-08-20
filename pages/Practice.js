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
import PageContainer from '../components/PageContainer';
import MultipleChoiceQuiz from '../components/QuizComponents/MultipleChoiceQuiz';
import firebase from '../utils/FirebaseConfig';
import TestData from '../utils/TestData';
const lessonsRef = firebase.firestore().collection('lessons');
//navigation prop needed to move between pages
const Practice = ({navigation}) => {
    const [lesson,setLesson] = useState(false);
    console.log(lesson);
    const getLessons = async (lessonID) =>{
      console.log("StartFetch");
      const snapshot = await lessonsRef.where('LessonID', '==', lessonID).get();
      console.log("Finished Fetch");
      let lessonObject = snapshot.docs.map(doc => Object.assign(doc.data(), {documentID: doc.id}));
      console.log(lessonObject);
      if(lessonObject.length > 0){
        setLesson(lessonObject[0]);
      }
    }
    const getTestLessons = () => {
        setLesson(TestData);
    }
    if(!lesson){
      getLessons(1);
      return(<View><Text>Loading</Text></View>)
    }
    else{ return(
      <PageContainer>
          <MultipleChoiceQuiz questions={lesson.LessonQuestions}/>
      </PageContainer>
    )}
}
export default Practice;

