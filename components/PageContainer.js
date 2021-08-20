import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    ScrollView,
    TextInput,
    Button,
    Dimensions
  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, NavigationActions, StackActions } from '@react-navigation/native';
import HomeIcon from '../icons/HomeIcon';
import Brain from '../icons/Brain';
import Practice from '../icons/Practice';
import Store from '../icons/Store';
import {clearStorage} from '../utils/UserStorage';

//Wrap page content in a scroll view to ensure footer is always visible
//https://stackoverflow.com/questions/29447715/react-native-fixed-footer
//TODO get rid of all inline styles
const PageContainer = (props) => {
    const navigation = useNavigation();

    //Flex 1 is needed to make the view take up the whole screen size.
    //Read about flexbox https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
    return(
    <View style={{flex: 1}}>
        {props.children}
        <View style={{height: 60, backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
        <TouchableOpacity
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })}
        >
          <HomeIcon/>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'Learn' }],
        })}
        >
          <Brain/>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('Practice')}
        >
          <Practice/>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => {
          clearStorage().then( res => {navigation.navigate('Login');});
        }}
        >
          <Store/>
        </TouchableOpacity>
        </View>
    </View>); 
  } 

  export default PageContainer;