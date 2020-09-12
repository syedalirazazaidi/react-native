import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
// import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import color from '../config/colors';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    backgroundColor: color.light,
    marginTop: 5,
    borderRadius: 25,
    flexDirection: 'row',
    // padding: 3,
    marginVertical: 10,
  },
  textInput: {
    marginLeft: 5,
    fontSize: 23,
  },
  icon: {
    marginTop: 5,
    padding: 5,
  },
});

const AppTextInput = ({icon, paddingTop}) => {
  return (
    <View style={styles.container}>
      {icon && <Icon name={icon} style={styles.icon} size={20} color="#000" />}
      <TextInput style={styles.textInput} placeholder="Email"></TextInput>
    </View>
  );
};

export default AppTextInput;
