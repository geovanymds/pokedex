import {Dimensions, StyleSheet} from 'react-native';
const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // paddingTop: 35,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#555555',
  },
  physicalStatsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  heightAndWeight: {
    padding: 20,
  },
  text: {
    textTransform: 'uppercase',
    color: '#fff',
  },
  typesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 10,
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  name: {
    color: '#FFF',
    fontSize: 12,
  },
  statsChart: {
    marginTop: 25,
  },
});
