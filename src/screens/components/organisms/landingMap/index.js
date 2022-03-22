import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import MapView, {
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
  Marker,
  Circle,
  // Animated,
} from 'react-native-maps';

import style from './style';
import color from '_theme/colors';

const LandingMap = ({location, locationGranted, onHandleLocation, places}) => {
  return (
    <View style={[style.container, style.center]}>
      <View
        style={{
          flex: 1,
          // minHeight: '80%',
          width: '100%',
          borderRadius: 8,
          borderWidth: 4,
          borderColor: color.primary,
          backgroundColor: '#EEEEEE',
          position: 'relative',
        }}>
        <View style={{...StyleSheet.absoluteFillObject}}>
          <MapView
            pointerEvents="auto"
            region={location}
            maxZoomLevel={16.5}
            onRegionChangeComplete={onHandleLocation}
            provider={PROVIDER_GOOGLE}
            showsBuildings={false}
            style={[style.absoluteCont, style.mapCont]}>
            {places.length > 0 &&
              places.map((val, idx) => (
                <Marker key={val.name + idx} coordinate={val.coordinate}>
                  <View style={{height: 50, width: 50}}>{val.marker}</View>
                </Marker>
              ))}
            {/* <Marker coordinate={coordinates} />
      <Circle
        center={coordinates}
        radius={120}
        strokeWidth={0}
        fillColor={'rgba(255, 99, 71, 0.2)'}
      /> */}
          </MapView>
        </View>
      </View>
    </View>
  );
};

export default LandingMap;
