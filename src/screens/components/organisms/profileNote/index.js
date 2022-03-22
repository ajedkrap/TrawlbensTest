import React from 'react';
import {Text, View, Image} from 'react-native';

import {useDispatch} from 'react-redux';
import {logout} from '_redux/actions/app';

import Scroll from '_atoms/scroll';
import Label from '_atoms/label';
import Button from '_atoms/button';
import ReactNativeBanner from '_images/react-native-banner.jpg';
import color from '_theme/colors';

import style from './style';

const BulletList = ({children}) => (
  <View style={{flexDirection: 'row', marginBottom: 8}}>
    <Label contStyle={{marginRight: 8}}>&bull;</Label>
    <Label contStyle={{flex: 1}} textStyle={{textAlign: 'justify'}}>
      {children}
    </Label>
  </View>
);

const ProfileNote = ({route, navigation: nav}) => {
  const dispatch = useDispatch();

  const onLoggingOut = () => {
    dispatch(logout());
  };

  return (
    <Scroll
      contStyle={{backgroundColor: color.white}}
      style={{paddingBottom: 38}}>
      <Label
        contStyle={[style.center, style.headerTitle]}
        textStyle={{fontSize: 24}}>
        Programmer Note's
      </Label>
      <View
        style={{
          height: 240,
          elevation: 8,
          backgroundColor: 'grey',
          width: '100%',
        }}>
        <Image
          style={{flex: 1, height: null, width: null}}
          resizeMode="cover"
          source={ReactNativeBanner}
        />
      </View>
      <Label
        contStyle={{paddingHorizontal: 18, marginTop: 16}}
        textStyle={{textAlign: 'justify'}}>
        <Text style={{color: 'skyblue'}}>React Native</Text> is a kerangka kerja
        yang berdasarkan JSX (ekstensi daripada JavaScript), sintaks berbasis
        ES6, <Text style={{fontStyle: 'italic'}}>state dan props</Text>. Ini
        adalah kerangka kerja JavaScript untuk menulis aplikasi seluler yang
        nyata dan asli untuk platform seperti iOS dan Android.
      </Label>
      <View style={{paddingHorizontal: 18, marginTop: 16}}>
        <Label textStyle={{fontWeight: 'bold', marginBottom: 8}}>
          Keuntungan dari React Native
        </Label>
        <View style={{marginLeft: 12}}>
          <BulletList>
            <Text style={{fontWeight: 'bold'}}>Aplikasi seluler </Text>dapat
            dibangun dengan bantuan
            <Text style={{fontWeight: 'bold'}}> Teknologi Web</Text> yang
            memungkinkan setiap pengembang web untuk dengan mudah meningkatkan
            keterampilannya dan membuat aplikasi React.
          </BulletList>
          <BulletList>
            <Text style={{fontWeight: 'bold'}}>React Native</Text> membantu
            dalam membangun
            <Text style={{fontWeight: 'bold'}}>
              {' '}
              aplikasi seluler lintas platform.
            </Text>
          </BulletList>
          <BulletList>
            Dapat menghemat waktu dan biaya untuk membangun aplikasi seluler di
            berbagai platform.
          </BulletList>
          <BulletList>
            Kerangka pengembangan yang digunakan di aplikasi iOS dan Android
            juga digunakan saat membuat aplikasi berbasis{' '}
            <Text style={{fontWeight: 'bold'}}>React Native </Text> yang berarti
            bahwa React Native adalah kerangka kerja seluler yang mengkompilasi
            komponen aplikasi untuk aplikasi seluler asli dalam JavaScript.
          </BulletList>
          <BulletList>
            Aplikasi <Text style={{fontWeight: 'bold'}}> React Native</Text>{' '}
            memastikan kecepatan dan kelincahan untuk aplikasi seluler dengan
            responsivitas dan pengalaman pengguna berbasis aplikasi asli yang
            hebat.
          </BulletList>
        </View>
      </View>
      <Label
        contStyle={{paddingHorizontal: 18, marginTop: 16}}
        textStyle={{textAlign: 'justify'}}>
        Contoh React Native yang terkenal di dunia nyata adalah{' '}
        <Text style={{fontWeight: 'bold'}}>Instagram</Text>. Ada banyak nama
        besar lainnya dalam bisnis untuk React Native Example seperti{' '}
        <Text style={{fontWeight: 'bold'}}>Wal-Mart</Text>,{' '}
        <Text style={{fontWeight: 'bold'}}>Facebook Ads</Text>,{' '}
        <Text style={{fontWeight: 'bold'}}>Townske</Text>,{' '}
        <Text style={{fontWeight: 'bold'}}> Delivery.com</Text>, dll.
      </Label>
      <View style={{height: 80, padding: 8, marginTop: 36}}>
        <Button
          onPress={() => onLoggingOut()}
          ripple
          style={{overflow: 'hidden', flex: 1, borderRadius: 12}}
          contentStyle={{
            backgroundColor: color.primary,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: color.white, fontSize: 18}}>Logout</Text>
        </Button>
      </View>
    </Scroll>
  );
};

export default ProfileNote;
