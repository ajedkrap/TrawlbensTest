import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';

import Button from '_atoms/button';

import color from '_theme/colors';

const SubmitButton = ({isLoading, onSubmit}) => {
  return (
    <Button
      ripple
      center
      onPress={onSubmit}
      style={{
        minWidth: '80%',
        // height: '80%',
        overflow: 'hidden',
        borderRadius: 6,
        backgroundColor: color.primary,
      }}>
      {isLoading ? (
        <ActivityIndicator size={18} color={color.white} />
      ) : (
        <Text style={{color: color.white}}>Login</Text>
      )}
    </Button>
  );
};

export default SubmitButton;
