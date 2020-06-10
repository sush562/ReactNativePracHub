import React, {useState} from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
    //screen is refreshed everytime state changes
    const [colors, setColors] = useState([])
    console.log(colors)

    return <View>
        <Button title="Add a color" onPress={() => {
            setColors([...colors, randomRgb()])
        }}/>
        <Text>Fixed Color</Text>
        <View style={{height: 100, width: 100, backgroundColor: 'rgb(0,255,0)'}} />
        <Text>Random Color</Text>
        <View style={{height: 100, width: 100, backgroundColor: randomRgb()}} />
        <Text>Flat List</Text>
        <FlatList
            keyExtractor={(item) => item} 
            data = {colors}
            renderItem={({item}) => {
                return <View style={{height: 100, width: 100, backgroundColor: item}} />
            }}
        />
    </View>
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    console.log(`rgb(${red}, ${green}, ${blue})`)

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({

});

export default ColorScreen;