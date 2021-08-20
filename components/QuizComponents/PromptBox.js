import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import Colors from "../../utils/Colors";
import CognifiTextBox from "../CognifiTextBox";

const PromptBox = (props) => {
    return(
        <View style={styles.OuterBox}> 
            <CognifiTextBox text_style={{marginTop:5, marginLeft: 5,fontSize: 20}} text={props.content}></CognifiTextBox>
        </View>
    )
}

const styles = StyleSheet.create({
    OuterBox: {
        borderColor: Colors.Cognifi_Green, 
        borderWidth: 1, 
        display: "flex", 
        width: 300, 
        height: 100,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default PromptBox;