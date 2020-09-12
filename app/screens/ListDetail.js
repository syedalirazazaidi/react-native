import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import color from '../config/colors';
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
  },
  image: {
    borderRadius: 40,
    width: 70,
    height: 70,
    padding: 10,
  },
  imageContainer: {
    marginLeft: 20,
    padding: 10,
  },
  text: {
    color: color.medium,
    marginTop: 3,
  },
});

const ListDetail = ({image, title, subTitle}) => {
  console.log('hi', title);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.imageContainer}>
        <Text>{title}</Text>
        <Text style={styles.text}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default ListDetail;
