import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput } from "react-native";

const BoxScreen = () => {
    
    return <View>
        <View style={styles.viewStyle1}>
            <Text style={styles.textStyle}>Box Screen 1</Text>
        </View>
        <View style={styles.viewStyle2}>
            <Text style={styles.textStyle}>Box Screen 2</Text>
        </View>
        <View style={styles.viewStyle3}>
            <Text style={styles.textStyle}>Box Screen 3</Text>
        </View>
        <View style={styles.viewStyle4}>
            <Text style={styles.textStyle1}>Box Screen 4</Text>
            <Text style={styles.textStyle2}>Box Screen 5</Text>
            <Text style={styles.textStyle3}>Box Screen 6</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black'
    },
    viewStyle1: {
        alignItems: 'flex-start'
    },
    viewStyle2: {
        alignItems: 'center'
    },
    viewStyle3: {
        alignItems: 'flex-end'
    },
    viewStyle4: {
        flexDirection: 'row',
        height: 200,
        justifyContent: 'space-between'
    },
    textStyle: {
        borderColor: 'red',
        borderWidth: 3
    },
    textStyle1: {
        borderColor: 'red',
        borderWidth: 3,
        flex: 1
    },
    textStyle2: {
        borderColor: 'red',
        borderWidth: 3,
        flex: 1
    },
    textStyle3: {
        borderColor: 'red',
        borderWidth: 3,
        flex: 1
    }
});

export default BoxScreen;