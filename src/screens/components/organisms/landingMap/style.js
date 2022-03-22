import {StyleSheet} from 'react-native';
import {hW, wW} from '_helpers/dimensions';
import color from '_theme/colors';

export default StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 8,
  },
  absoluteCont: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
  },
});
