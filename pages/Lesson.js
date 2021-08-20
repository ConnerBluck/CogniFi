/* eslint-disable react/prop-types */
import * as React from 'react';
import Achievements from "../components/Achievements";
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
import MarkdownRenderer from '../components/MarkdownRenderer';

//navigation prop needed to move between pages
const Lesson = ({route, navigation}) => {
  console.log(route);
  const lessonID = route.params.lessonID;
    return(
      <PageContainer>
        <View style={{flex: 1}}>
          <MarkdownRenderer lessonID={lessonID}/>
        </View>
      </PageContainer>
    )
}
export default Lesson;