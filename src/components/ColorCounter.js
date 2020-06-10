import React, {useState} from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorCounter = (props) => {
    return <View>
        <Text>{props.color}</Text>
        <Button title={`Increase ${props.color}`} />
        <Button title={`Decrease ${props.color}`} />
    </View>
}

const styles = StyleSheet.create({

});

export default ColorCounter;