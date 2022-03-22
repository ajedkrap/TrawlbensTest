import {Platform, ToastAndroid, Alert} from 'react-native';
import {screenHeight} from '../helpers/dimensions';

export default (msg, title = 'Error') =>
  Platform.OS === 'android'
    ? ToastAndroid.showWithGravityAndOffset(
        msg,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        screenHeight * (15 / 100),
      )
    : Alert.alert(title, msg);
