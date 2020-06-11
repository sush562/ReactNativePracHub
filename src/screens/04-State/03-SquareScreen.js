import React, {useState} from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColorCounter from '../../components/ColorCounter'

const COLOR_INCREMENT = 15

const SquareScreen = () => {

    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    //function to put a check on color amount between 0 and 255
    const setColor = (color, change) => {
        //color === 'red', 'green' or 'blue'
        //change === + or -15
        switch(color){
            case 'red':
                red + change > 255 || red + change < 0? null: setRed(red + change);//null if no change is required
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0? null: setBlue(blue + change)
                return;
            case 'green':
                green + change > 255 || green + change < 0? null: setGreen(green + change)
                return;
            default:
                return;
        }
    };

    return <View>
        <ColorCounter 
            onIncrease={() => setColor('red', COLOR_INCREMENT)} 
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)} 
            color = "Red" 
        />
        <ColorCounter 
            onIncrease={() => setColor('blue', COLOR_INCREMENT)} 
            onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)} 
            color = "Blue" 
        />
        <ColorCounter 
            onIncrease={() => setColor('green', COLOR_INCREMENT)} 
            onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)} 
            color = "Green" 
        />
        <Text>{`rgb(${red}, ${green}, ${blue})`}</Text>
        <View style={{height:150, width:150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
    </View>
}

const styles = StyleSheet.create({

});

export default SquareScreen;