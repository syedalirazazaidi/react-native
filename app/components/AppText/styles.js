import {StyleSheet, Platform} from 'react-native';
const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir-Light',
  },
});
export default styles;
