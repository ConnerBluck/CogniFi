import React, {useRef, useState, useEffect} from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import Constants from 'expo-constants';

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
    savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
    function tick() {
        savedCallback.current();
    }
    if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
    }
    }, [delay]);
}


const ProgressBar = (props) => {
    let animation = useRef(new Animated.Value(0));
    const progress = props.progress;

    useEffect(() => {
    Animated.timing(animation.current, {
        toValue: progress,
        duration: 100,
        useNativeDriver: false
    }).start();
    },[progress])

    const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp"
    })
    return (
    <View style={styles.container}>
        <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width }}/>
        </View>
    </View>
    );
}

export default ProgressBar;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    },
    progressBar: {
    flexDirection: 'row',
    height: 20,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5
    }
});