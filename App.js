import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Home from './pages/Home.js';
import Learn from './pages/Learn';
import Lesson from './pages/Lesson';
import Practice from './pages/Practice';
import {
  useFonts,
  Roboto_100Thin,
} from '@expo-google-fonts/roboto';
import colors from './utils/Colors';

const Stack = createStackNavigator();

const App = () => {

//Navigation Container wraps the whole application to allow page navigation anywhere
//Info on navigation https://reactnavigation.org/docs/hello-react-navigation
//Also creates a default header component (to modify look at https://reactnavigation.org/docs/headers/)
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
  });
  if (!fontsLoaded) {
    return <Text> Loading Fonts</Text>;
  }
  else{
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={options}>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Learn" component={Learn} />
          <Stack.Screen name="Lesson" component={Lesson} />
          <Stack.Screen name="Practice" component={Practice} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const options = {
  title: 'CogniFi',
  headerStyle: {
    backgroundColor: colors.Cognifi_Green,
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS   
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: 'Roboto_100Thin'
  },
};

export default App;