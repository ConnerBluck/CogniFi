import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, Text, Button } from 'react-native';
import Markdown from 'react-native-markdown-display';
import ExampleLessonMarkdown from '../utils/ExampleLessonMarkdown';
import firebase from '../utils/FirebaseConfig';
import TestData from '../utils/TestData';
import {storeToken, getToken} from '../utils/UserStorage';
import { useNavigation, NavigationActions, StackActions } from '@react-navigation/native';
const lessonsRef = firebase.firestore().collection('lessons');

const MarkdownRenderer = (props) => {
  const navigation = useNavigation();
  const [currentLesson,updateCurrentLesson] = useState(false);
  const [currentUser,updateCurrentUser] = useState(null);
  if(currentUser === null){
    getToken().then(res => {
      updateCurrentUser(res);
    })
  }
  
  const updateUserState = () => {
    let copy = {}
    Object.assign(copy, currentUser);
    console.log(copy);
    copy.progress[0]++;
    storeToken(copy).then(res => {
      getToken().then(res => {
        console.log(res);
          updateCurrentUser(res);
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          })
      })
    }
    )
  }
  const getLessons = async (lessonID) =>{
    console.log("StartFetch");
    const snapshot = await lessonsRef.where('LessonID', '==', lessonID).get();
    console.log("Finished Fetch");
    let lessonObject = snapshot.docs.map(doc => Object.assign(doc.data(), {documentID: doc.id}));
    console.log(lessonObject);
    if(lessonObject.length > 0){
      updateCurrentLesson(lessonObject[0]);
    }
  }
  if(!currentLesson || !currentUser){
    getLessons(props.lessonID);
    return(<View><Text>Loading</Text></View>)
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{height: '100%'}}
        >
          <Markdown>
            {JSON.parse(currentLesson.LessonMarkdown).text}
          </Markdown>
          <Button
            onPress={updateUserState}
            title="Finish Lesson"
            color="green"
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default MarkdownRenderer;