import React, {useState, useRef} from 'react';
import {Text, View, SafeAreaView, StatusBar, Keyboard} from 'react-native';

import {useDispatch} from 'react-redux';

import {login} from '_redux/actions/app';
import alert from '_helpers/alert';
import LoginInput from '_molecules/loginInput';
import SubmitButton from '_molecules/submitButton';

import color from '_theme/colors';
import style from './style';

const LoginForm = ({route, navigation: nav}) => {
  const dispatch = useDispatch();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({username: '', password: ''});
  const [isLoading, setLoading] = useState(false);

  const onHandleForm = (text, key) =>
    setForm(state =>
      setForm({...state, [key]: text && text !== '' ? text : ''}),
    );

  const onSubmit = async () => {
    setLoading(true);
    Keyboard.dismiss();
    try {
      if (
        !form.username ||
        !form.password ||
        form.username === '' ||
        form.password === ''
      ) {
        throw new Error('Formulir Salah');
      } else {
        dispatch(login());
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={color.primary} barStyle={'light-content'} />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <LoginInput
          ref={usernameRef}
          value={form.username}
          placeholder={'Username'}
          onChange={text => onHandleForm(text, 'username')}
        />
        <LoginInput
          value={form.password}
          ref={passwordRef}
          placeholder={'Password'}
          onChange={text => onHandleForm(text, 'password')}
          password
        />
      </View>
      <View
        style={{
          height: '8%',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 12,
        }}>
        <SubmitButton isLoading={isLoading} onSubmit={onSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default LoginForm;
