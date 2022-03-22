import React from 'react';
import {Text, View, FlatList} from 'react-native';

import Button from '_atoms/button';
import color from '_theme/colors';

const LandingButton = ({onSelectLocation, places}) => {
  const onRenderingItem = ({item, index}) => {
    return (
      <Button
        onPress={() => onSelectLocation(item.coordinate)}
        style={{
          width: '48%',
          height: 50,
          overflow: 'hidden',
          borderRadius: 8,
          marginBottom: 16,
          elevation: 4,
        }}
        contentStyle={{
          backgroundColor:
            item.name === 'trawlbens' ? color.primary : color.white,
          paddingHorizontal: 8,
          alignItems: 'center',
          borderRadius: 8,
        }}
        center
        horizontal>
        <View
          style={{
            height: 40,
            aspectRatio: 1,
            flex: 1,
            marginRight: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {item.icon}
        </View>
        <View style={{flex: 3}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              textTransform: 'capitalize',
              color: item.name === 'trawlbens' ? color.white : color.neutral,
            }}>
            {item.name}
          </Text>
        </View>
      </Button>
    );
  };

  if (places.length < 0) {
    return (
      <View>
        <Text>Button Kosong</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={{height: '5%'}}
      numColumns={2}
      contentContainerStyle={{padding: 8, paddingHorizontal: 18}}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      keyExtractor={(val, idx) => val[0] + idx}
      data={places}
      renderItem={onRenderingItem}
    />
    // <View style={{height: '20%', padding: 8}}>
    //   <Text> landingButton </Text>
    // </View>
  );
};

export default LandingButton;
