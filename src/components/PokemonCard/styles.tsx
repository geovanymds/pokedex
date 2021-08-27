import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: 170, 
    height: 100,
    padding: 5,
    margin: 15,
    alignItems: 'center',
    borderRadius: 7,
    justifyContent: 'space-around'
  },
  image: {
    width: 60, 
    height: 60
  },
  name: {
    color: '#FFF',
    fontSize: 12
  },
});