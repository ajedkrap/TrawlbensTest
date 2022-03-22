import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '_organisms/header';
import LandingScreen from '_screens/landingScreen';
import RegisterScreen from '_screens/registerScreen';
import ProfileScreen from '_screens/profileScreen';

import color from '_theme/colors';

const Tabs = [
  {
    title: 'Home',
    name: 'landing',
    logo: 'home-variant-outline',
    screen: LandingScreen,
  },
  {
    title: 'Form',
    name: 'register',
    logo: 'file-document-outline',
    screen: RegisterScreen,
  },
  {
    title: 'Notes',
    name: 'profile',
    logo: 'account-circle',
    screen: ProfileScreen,
  },
];

const {Navigator, Screen} = createBottomTabNavigator();

const UserTabs = ({route, navigation: nav}) => {
  return (
    <Navigator
      initialRouteName="landing"
      screenOptions={{
        header: props => <Header {...props} />,
      }}>
      {Tabs.map((val, idx) => (
        <Screen
          key={idx + val['name']}
          name={val['name']}
          component={val['screen']}
          options={{
            tabBarLabel: val['title'],
            tabBarLabelStyle: {paddingBottom: 4},
            tabBarIcon: ({color, size}) => (
              <Icon name={val['logo']} color={color} size={size} />
            ),
            tabBarActiveTintColor: color.primary,
            tabBarInactiveTintColor: 'grey',
          }}
        />
      ))}
    </Navigator>
  );
};

export default UserTabs;
