import {Text, Pressable, View} from 'react-native';
import React from 'react';

const CustomBtn = ({title}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        backgroundColor: '#C60A0A',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold',
          letterSpacing: 1,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default CustomBtn;
