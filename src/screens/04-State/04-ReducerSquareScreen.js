import React, {useReducer} from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColorCounter from '../../components/ColorCounter'

const COLOR_INCREMENT = 15

//action mean how to change the object like increase or decrease red, blue or green
const reducer = (state, action) => {
    //state = {red: number, green: number, blue: number}
    //action = {type: red or green or blue to + or - 15}
    switch(action.type){
        case 'action_red':
            //never modify state variables directly like state.red = state.red + 1
            if(state.red + action.payload > 255 || state.red + action.payload < 0){
                return state
            }
            return {...state, red: state.red + action.payload} //This replaces red variable in state with new red value
        case 'action_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0? state:                 
            {...state, green: state.green + action.payload}
        case 'action_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0? state:                 
            {...state, blue: state.blue + action.payload}
        default:
            return state;
    }    
};

const ReducerSquareScreen = () => {

    const [state, runMyReducer] = useReducer(reducer, {red: 0, green:0, blue:0}) 
    const {red, green, blue} = state;   

    return <View>
        <ColorCounter 
            onIncrease={() => runMyReducer({type:'action_red', payload: COLOR_INCREMENT}) } 
            onDecrease={() => runMyReducer({type:'action_red', payload: -1 * COLOR_INCREMENT})} 
            color = "Red" 
        />
        <ColorCounter 
            onIncrease={() => runMyReducer({type:'action_blue', payload: COLOR_INCREMENT})} 
            onDecrease={() => runMyReducer({type:'action_blue', payload: -1 * COLOR_INCREMENT})} 
            color = "Blue" 
        />
        <ColorCounter 
            onIncrease={() => runMyReducer({type:'action_green', payload: COLOR_INCREMENT})} 
            onDecrease={() => runMyReducer({type:'action_green', payload: -1 * COLOR_INCREMENT})} 
            color = "Green" 
        />
        <Text>{`rgb(${red}, ${green}, ${blue})`}</Text>
        <View style={{height:150, width:150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
    </View>
}

const styles = StyleSheet.create({

});

export default ReducerSquareScreen;