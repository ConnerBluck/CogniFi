import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    ScrollView,
    TextInput,
    Button,
    Dimensions
} from 'react-native';
import Trophy from "../icons/Trophy";

const Achievements = (props) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                {(props.user.badges.firstQuiz > 0) ? <Trophy/> : <Text>No Badges Yet!</Text>}
            </View>
        </View>
    )
}

export default Achievements;