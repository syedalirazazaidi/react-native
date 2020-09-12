import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btnA: {
    backgroundColor: '#fc5c65',
    width: '100%',
    padding: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  btnB: {
    backgroundColor: '#4ECDC4',
    width: '100%',
    padding: 20,
    borderRadius: 20,
    textTransform: 'uppercase',
  },
  icon: {
    width: 100,
    height: 100,
  },
  iconContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  log: {
    textTransform: 'uppercase',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    // padding: 20,
  },
  reg: {
    textTransform: 'uppercase',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
  },
  buttonContainer: {
    margin: 20,
    width: '100%',
  },
});
function WelComeScreen({login, register}) {
  return (
    <ImageBackground
      style={styles.image}
      blurRadius={15}
      source={require('../assets/background.jpg')}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={require('../assets/logo-red.png')} />
        <Text>Sell you Dont Need</Text>
      </View>
      {/* <Image source={require('../assets/logo-red.jpg')} /> */}
      {/* <View style={styles.mainDev}> */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btnA}>
          <Text style={styles.log}>{login}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnB}>
          <Text style={styles.reg}>{register}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
export default WelComeScreen;
