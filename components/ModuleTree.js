/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Achievements from "../components/Achievements";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    ScrollView,
    TextInput,
    Button,
    Modal,
    Pressable
  } from 'react-native';
  import CircleTest from "../icons/CircleTest";
  import ModuleIcon from "../icons/ModuleIcon";
  import { useNavigation } from '@react-navigation/native';
  import useCurrentUser from "../utils/UseCurrentUser";

//navigation prop needed to move between pages
const ModuleTree = (props) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [user, setUser] = useCurrentUser();
    const conditionalNavigate = () => {
      if(user.progress[0] > 0){
        navigation.navigate("Lesson", {lessonID: 1});
      }
    }
    if(user === null){
      return(<Text>Loading</Text>)
    }
    return(
      <View style={{flex: 1, marginTop: 70}}>
        <View style={{display: "flex", flexDirection: "column", alignContent: "space-between", justifyContent: "space-evenly"}}>
            <View style={styles.moduleRow}>
                <Text style={{fontSize: 25, fontFamily: "Roboto_100Thin"}}>Modules</Text>
            </View>
            <View style={styles.moduleRow}>
                <View>
                    <CircleTest color={"green"} name={"Purpose"} style={styles.circle}  onPress={() => navigation.navigate("Lesson", {lessonID: 0})} />
                </View>
            </View>
            <View style={styles.moduleRow}>
                <CircleTest color={(user.progress[0] > 0) ? "green" : "grey"} name={"Investments"} style={styles.circle} onPress={() => conditionalNavigate()}/>
                <CircleTest color={"grey"} name={"Investing"} style={styles.circle}/>
            </View>
            <View style={styles.moduleRow}>
                <CircleTest color={"grey"} name={"Investing"} style={styles.circle}/>
                <CircleTest color={"grey"} name={"Investing"} style={styles.circle}/>
                <CircleTest color={"grey"} name={"Investing"} style={styles.circle}/>
            </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    moduleRow: {
      display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "space-evenly", marginBottom: 40
    },
    circle: {
      flex: 1,
    }
  });
export default ModuleTree;