import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    margin: 15,
    borderRadius: 30,
    backgroundColor: '#fff'
  },
  image: {
    width: 30,
    height: 30,
    margin: 10
  },
  text: {
      color: '#000',
      width: '80%',
      marginLeft: 15
  }
});
