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
import ModuleTree from '../components/ModuleTree';
import MarkdownRenderer from '../components/MarkdownRenderer';

//navigation prop needed to move between pages
const Learn = ({navigation}) => {
    return(
      <PageContainer>
        <View style={{flex: 1}}>
          <ModuleTree/>
        </View>
      </PageContainer>
    )
}
export default Learn;