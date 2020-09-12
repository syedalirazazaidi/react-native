// import React from 'react';
// import {View, StyleSheet, Image} from 'react-native';
// import colors from '../config/colors';
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.black,
//     flex: 1,
//   },
//   closeIcon: {
//     width: 50,
//     height: 50,
//     backgroundColor: colors.primary,
//     position: 'absolute',
//     top: 40,
//     left: 30,
//   },
//   deleteIcon: {
//     width: 50,
//     height: 50,
//     backgroundColor: colors.secondary,
//     position: 'absolute',
//     top: 40,
//     right: 30,
//   },
//   ima: {
//     width: '100%',
//     height: '100%',
//   },
// });

// const ViewScreen = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.closeIcon}></View>
//       <View style={styles.deleteIcon}></View>
//       <Image
//         style={styles.ima}
//         resizeMode="contain"
//         source={require('../assets/chair.jpg')}
//       />
//     </View>
//   );
// };

// export default ViewScreen;
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contitem: {
    fontSize: 30,
    fontFamily: 'monospace',
    color: 'orange',
  },
});

const ViewScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.contitem}>I Love React Native</Text> */}
      <Icon name="mail" size={70} color="#f8f4f4" />
    </View>
  );
};

export default ViewScreen;
