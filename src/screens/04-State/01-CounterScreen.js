import React, {useState} from "react";
import { Text, StyleSheet, View, Button } from "react-native";

//Tutorial on State
const CounterScreen = () => {
    //Cannot change value of counter directly. We need to use setCounter() to do that
    const [counter, setCounter] = useState(0)//Initial value
    return <View>
        <Button 
            title = "Increase"
            onPress = {() => {
                setCounter(counter + 1)
            }}
        />
        <Button 
            title = "Decrease"
            onPress = {() => {
                setCounter(counter - 1)
            }}
        />
        <Text>Current Count: {counter}</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default CounterScreen;