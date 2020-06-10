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
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 60
  }
});

export default HomeScreen;
