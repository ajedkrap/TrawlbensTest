import {StyleSheet} from 'react-native';
import color from '_theme/colors';

export default StyleSheet.create({
  container: {
    minHeight: 50,
    borderRadius: 4,
    borderWidth: 1,
    position: 'relative',
    zIndex: 10,
    backgroundColor: color.white,
    minWidth: '70%',
    marginBottom: 18,
  },
  labelCont: {
    position: 'absolute',
    top: 0,
    left: '4%',
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    zIndex: 20,
  },
  label: {
    alignSelf: 'flex-start',
    backgroundColor: color.white,
    paddingHorizontal: 4,
  },
});
