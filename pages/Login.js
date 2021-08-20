import React, { useState, useEffect } from 'react'
import { LogBox } from 'react-native';
import firebase from '../utils/FirebaseConfig';
import {storeToken, getToken} from '../utils/UserStorage';

LogBox.ignoreLogs(['Setting a timer']);
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

//Get reference to users page in firestore
const usersRef = firebase.firestore().collection('users');


//Using react hooks to manage state
//React hooks: https://reactjs.org/docs/hooks-state.html
function Login({navigation}) {
  const [state, setState] = useState({
    name: "",
    email: "",
    value: "",
    passValue: ""
  })
  const [loggedIn, setLogged] = useState(false);
  //This check needs to happen after the component is rendered therefore we need useEffect()
  useEffect(() => {
    if(!loggedIn){
      getToken().then(res => {
        if(res){
          setLogged(true);
          navigation.navigate('Home');
        }
      })
    }
  })

  const login = async (email, pass) => {
    //Enter Callback Hell
    firebase
      .auth()
      //Attempt to login with provided info
      .signInWithEmailAndPassword(email, pass)
      .then(async res => {
        //If Login was a success retrieve asscoiated user_data for account
        console.log("Object");
        console.log(res.user);
        console.log("Object UID");
        let user_data = res.user;
        console.log(user_data.uid);
        const user = await usersRef.where('userID', '==', user_data.uid).get();
        if(!user.empty){
          console.log(usersRef.id)
          console.log(user.docs[0].data());
          //Store user_data in Async storage for persistent access throughout the application
          storeToken(user.docs[0].data());
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          })
        }
      })
      .catch(error => {
        // Handle Errors here.
        console.log(error.message);        
      });
};
  
  //onPress() login through firebase auth
  const onPress = async () => {
    login(state.value, state.passValue);
  }

  //Update text_box state with text entered
  const handleInput = (text) => {
    setState({
      value: text,
      name: state.name,
      email: state.email,
      passValue: state.passValue
    });
  }

  //Update text_box state with text entered
  const handlePassInput = (text) => {
    setState({
      value: state.value,
      name: state.name,
      email: state.email,
      passValue: text
    });
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text  style={{ fontSize: 70, fontFamily: 'Roboto_100Thin', color: "grey" }}>CogniFi</Text>
      </View>
      <View style={{flex: 2, alignItems: "center"}}>
        <Text>
          Enter username
        </Text>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }} onChangeText={text => handleInput(text)} value={state.value}/>
        <Text>
          Enter password
        </Text>
        <TextInput secureTextEntry={true} style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }} onChangeText={text => handlePassInput(text)} value={state.passValue}/>
        <Button
          style={styles.button}
          title="Login"
          onPress={() => onPress()}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    marginBottom: 10,
    padding: 10
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    display: "flex"
  }
})

export default Login;