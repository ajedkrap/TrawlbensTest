import React, {useState, useRef} from 'react';
import {Text, View} from 'react-native';

import Scroll from '_atoms/scroll';
import RegisterInput from '_molecules/registerInput';
import color from '_theme/colors';

import style from './style';

const initialForm = {
  name: '',
  address: '',
  email: '',
  phone: '',
};

const RegisterForm = ({route, navigation: nav}) => {
  const [form, setForm] = useState(initialForm);

  const nameRef = useRef();
  const addressRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const onHandleForm = (text, key) =>
    setForm(state => ({...state, [key]: text && text !== '' ? text : ''}));

  return (
    <Scroll contStyle={style.container} style={style.scrollCont}>
      <RegisterInput
        ref={nameRef}
        placeholder={'Nama'}
        value={form.name}
        onChange={text => onHandleForm(text, 'name')}
      />
      <RegisterInput
        ref={addressRef}
        placeholder={'Alamat'}
        value={form.address}
        style={{minHeight: 80}}
        onChange={text => onHandleForm(text, 'address')}
      />
      <RegisterInput
        ref={emailRef}
        placeholder={'Email'}
        value={form.email}
        keyboard={'email-address'}
        onChange={text => onHandleForm(text, 'email')}
      />
      <RegisterInput
        ref={phoneRef}
        placeholder={'Phone'}
        value={form.phone}
        keyboard={'phone-pad'}
        onChange={text => onHandleForm(text, 'phone')}
      />
    </Scroll>
  );
};

export default RegisterForm;
