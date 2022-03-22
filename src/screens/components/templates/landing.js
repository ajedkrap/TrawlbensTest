import React, {useEffect, useState, useCallback} from 'react';
import {Text, View, Alert as DefaultAlert} from 'react-native';

import {PERMISSIONS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import {useFocusEffect} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Monas from '_images/monas.svg';
import Trawlbens from '_images/trawlbens.svg';

import {checkPermission, requestPermission} from '_helpers/permissions';
import {getRegionForCoordinates} from '_helpers/coordinates';
// import Alert from '_helpers/alert';
import LandingMap from '_organisms/landingMap';
import LandingButton from '_organisms/landingButton';
import color from '_theme/colors';

const LOGO_RATIO = 30;

const PLACE_DATA = [
  {
    name: 'trawlbens',
    icon: (
      <Trawlbens height={LOGO_RATIO} width={LOGO_RATIO} fill={color.white} />
    ),
    marker: (
      <Trawlbens height={LOGO_RATIO} width={LOGO_RATIO} fill={color.primary} />
    ),
    coordinate: getRegionForCoordinates([
      {longitude: 106.8397856153413, latitude: -6.23220389715457},
    ]),
  },
  {
    name: 'monas',
    icon: <Monas height={LOGO_RATIO} width={LOGO_RATIO} fill={'#FFCC00'} />,
    marker: <Monas height={LOGO_RATIO} width={LOGO_RATIO} fill={'#FFCC00'} />,
    coordinate: getRegionForCoordinates([
      {longitude: 106.82715279726602, latitude: -6.1751683973128815},
    ]),
  },
];

const Landing = ({route, navigation: nav}) => {
  const [locationGranted, grantLocation] = useState(false);
  const [location, setLocation] = useState(
    getRegionForCoordinates([{longitude: 0, latitude: 0}]),
  );
  const [currentLocation, setCurrentLocation] = useState(null);
  const [places, setPlaces] = useState([]);

  const onPermitLocation = async () => {
    const permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

    const hasPermission = await checkPermission(permission);
    if (!hasPermission) {
      const requestGranted = await requestPermission(permission);
      if (!requestGranted) {
        DefaultAlert.alert(
          'Please allow permission to access the Location.',
          'Location Permission Request',
          [
            {
              text: 'Go to Settings',
              onPress: () => {
                Linking.openSettings();
              },
            },
          ],
          {cancelable: false},
        );
      } else {
        grantLocation(true);
      }
    } else {
      grantLocation(true);
    }
  };

  const onGetLocation = async () => {
    if (locationGranted && !currentLocation) {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
          const {longitude, latitude} = position.coords;
          const getPosition = getRegionForCoordinates([{longitude, latitude}]);
          let loc = {
            name: 'current',
            icon: (
              <Icon
                name={'crosshairs-gps'}
                size={LOGO_RATIO}
                color={color.neutral}
              />
            ),
            marker: (
              <Icon
                name={'crosshairs-gps'}
                size={LOGO_RATIO}
                color={color.primary}
              />
            ),
            coordinate: getPosition,
          };

          setCurrentLocation(getPosition);
          setLocation(getPosition);
          setPlaces([loc, ...PLACE_DATA]);
        },
        error => {
          console.log(error.code, error.message);
          Alert(error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };

  const onHandleLocation = newRegion => {
    setLocation({...newRegion});
  };

  useFocusEffect(
    useCallback(() => {
      if (!locationGranted) onPermitLocation();
      else onGetLocation();
    }, [locationGranted]),
  );

  return (
    <View style={{flex: 1, backgroundColor: color.white}}>
      <LandingMap
        location={location}
        locationGranted={locationGranted}
        onChangeLocation={onHandleLocation}
        places={places}
      />
      <LandingButton
        onSelectLocation={coordinates => onHandleLocation(coordinates)}
        currentLocation={currentLocation}
        places={places}
      />
    </View>
  );
};

export default Landing;
