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
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../utils/Colors';
const OverviewStatusContainer = (props) => {
  const currentUser = props.user;
  if(!currentUser){
    return(<View><Text>Loading</Text></View>)
  }
  let modulesCompleted = 0;
  if(currentUser.progress){
    modulesCompleted = currentUser.progress[0];
  }
    return(
        <View style={{flex: 1, backgroundColor: colors.Cognifi_Green}}>
            <LinearGradient
            style={{flex: 1}}
              // Background Linear Gradient
              colors={['transparent', colors.Cognifi_Gradient_Yellow]}
            >
              <Text style={{fontFamily: "Roboto_100Thin", color: "white", fontSize: 50, padding: 15, flex: 3}}>Hello, Ian</Text>
              <View style={{flex: 7, paddingLeft: 30}}>
                <Text style={{fontFamily: "Roboto_100Thin", color: "white", fontSize: 24}}>{modulesCompleted} modules completed</Text>
                <Text style={{fontFamily: "Roboto_100Thin", color: "white", fontSize: 24}}>1 day streak</Text>
                <Text style={{fontFamily: "Roboto_100Thin", color: "white", fontSize: 24}}>{props.user.badges.firstQuiz} achievements unlocked</Text>
              </View>
            </LinearGradient>
          </View>
    )
}
export default OverviewStatusContainer;