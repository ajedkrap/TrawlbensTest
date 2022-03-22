import React, {useEffect, useState, useRef} from 'react';
import {StatusBar, AppState as SystemState} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import {userActive, userIdle, idleCount} from '_redux/actions/app';
import LoginScreen from '_screens/loginScreen';
import UserTabs from '_routes/userTabs';

const {Navigator, Screen} = createStackNavigator();

const MainStack = props => {
  const dispatch = useDispatch();
  const appState = useSelector(state => state.app);
  const {isLoggedIn, isIdle} = appState;

  const systemState = useRef(SystemState.currentState);

  //APP STATE STUFF
  useEffect(() => {
    const subscription = SystemState.addEventListener(
      'change',
      nextAppState => {
        if (
          systemState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        )
          dispatch(userActive());
        else dispatch(userIdle());
        systemState.current = nextAppState;
      },
    );

    return () => {
      subscription.remove();
    };
  }, []);
  useEffect(() => {
    if (!isIdle) {
      if (isLoggedIn) {
        dispatch(idleCount());
      }
    }
  }, [isIdle]);

  //SplashScreen
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        hidden={false}
        barStyle={'light-content'}
        backgroundColor={'#ffffff'}
        translucent={false}
      />
      <Navigator>
        {!isLoggedIn && (
          <Screen
            name={'Login'}
            component={LoginScreen}
            options={{headerShown: false}}
          />
        )}
        {isLoggedIn && (
          <Screen
            name={'user-tabs'}
            component={UserTabs}
            options={{headerShown: false}}
          />
        )}
      </Navigator>
      {/* Where is the modal remain */}
    </NavigationContainer>
  );
};

export default MainStack;
