import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  //console.log(props.navigation)
  return (
    <View> 
      <Text style={styles.text}>Play2 Screen</Text>
      <Button 
        title="Go to Components Page"
        onPress={() => props.navigation.navigate('Components')} 
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>

      <Button 
        title="Go to Image Page"
        onPress={() => props.navigation.navigate('Image')} 
      />

      <Button 
        title="Go to Counter Page"
        onPress={() => props.navigation.navigate('Counter')} 
      />

      <Button 
        title="Go to Color Page"
        onPress={() => props.navigation.navigate('Color')} 
      />

      <Button 
        title="Go to Square Page"
        onPress={() => props.navigation.navigate('Square')} 
      />

      <Button 
        title="Go to Reducer Square Page"
        onPress={() => props.navigation.navigate('ReducerSquare')} 
      />

      <Button 
        title="Go to Text Input Page"
        onPress={() => props.navigation.navigate('TextScr')} 
      />

      <Button 
        title="Go to Box Layout Page"
        onPress={() => props.navigation.navigate('Box')} 
      />

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 60
  }
});

export default HomeScreen;
