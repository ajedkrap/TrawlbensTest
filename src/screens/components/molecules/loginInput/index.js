import React, {useRef, useEffect, forwardRef} from 'react';
import {View, Animated, Easing, Keyboard} from 'react-native';

import TextInput from '_atoms/textInput';
import color from '_theme/colors';

import style from './style';

const PlainTextInput = forwardRef(
  ({onChange, placeholder, value, editable, password = false}, ref) => {
    const marginTopValue = useRef(
      new Animated.Value(value === '' ? 0 : 1),
    ).current;
    const marginTop = marginTopValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -50],
      extrpolate: 'clamp',
    });
    const fontSize = useRef(new Animated.Value(value === '' ? 16 : 12)).current;

    const onAnimateLabel = (transValue, scaleValue) => {
      Animated.parallel([
        Animated.timing(marginTopValue, {
          toValue: transValue,
          duration: 200,
          easing: Easing.out(Easing.exp),
          useNativeDriver: false,
        }),
        Animated.timing(fontSize, {
          toValue: scaleValue,
          duration: 200,
          easing: Easing.out(Easing.exp),
          useNativeDriver: false,
        }),
      ]).start();
    };
    const onHandlingInput = text => onChange(text);
    const onFocus = () => onAnimateLabel(1, 12);
    const onBlur = () => value === '' && onAnimateLabel(0, 16);
    useEffect(() => {
      const blurOnHideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
        ref.current.blur();
      });
      return () => {
        blurOnHideKeyboard.remove();
      };
    }, []);

    return (
      <>
        <View
          style={[
            style.container,
            {
              borderColor: '#C8C8C8',
            },
          ]}>
          <TextInput
            ref={ref}
            editable={editable}
            onBlur={onBlur}
            onFocus={onFocus}
            onChangeText={onHandlingInput}
            length={10}
            password={password}
            style={{marginLeft: '4%', zIndex: 30, fontSize: 16}}
          />
          <Animated.View style={[style.labelCont, {marginTop}]}>
            <Animated.Text
              style={[style.label, {fontSize, color: color.neutral80}]}>
              {placeholder}
            </Animated.Text>
          </Animated.View>
        </View>
      </>
    );
  },
);

export default PlainTextInput;
