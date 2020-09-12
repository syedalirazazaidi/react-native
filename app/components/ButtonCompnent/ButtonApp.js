import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../config/colors';
const styles = StyleSheet.create({
  Button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

const ButtonApp = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.Button}>
      <Text style={styles.text} onPress={onPress}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonApp;
