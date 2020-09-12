import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import color from '../config/colors';
import ListDetail from './ListDetail';
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    marginBottom: 20,
  },
  imgCont: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  TextTitle: {
    color: color.secondary,
  },
  conta: {
    padding: 10,
  },
});

const CardScreen = ({title, subTitle, image}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imgCont} source={image} />
      <View style={styles.conta}>
        <Text>{title}</Text>
        <Text style={styles.TextTitle}>{subTitle}</Text>
      </View>
      <ListDetail
        title="Red jacket for sale!"
        subTitle="5 Listing"
        image={require('../../assets/mosh.jpg')}
      />
    </View>
  );
};

export default CardScreen;
