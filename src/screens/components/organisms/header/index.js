import React from 'react';
import {View, Text, StatusBar} from 'react-native';

import color from '_theme/colors';
import style from './style';

const DefaultHeader = ({route}) => {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={color.primary} barStyle={'light-content'} />
      <View style={{flex: 1}}></View>
      <View
        style={{
          flex: 1,
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            color: color.white,
            textTransform: 'capitalize',
          }}>
          {route.name === 'landing' ? 'home' : route.name}
        </Text>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
};

export default DefaultHeader;
