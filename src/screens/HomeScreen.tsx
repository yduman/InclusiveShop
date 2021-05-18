import React from 'react';
import { View, FlatList, Image } from 'react-native';

import { products } from '../../utils/data';

export default function HomeScreen() {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({ item }) => {
          return (
            <Image source={item.img} style={{ width: '100%', height: 500 }} />
          );
        }}
      />
    </View>
  );
}
