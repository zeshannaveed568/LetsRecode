import {Text, View} from 'react-native';
import React from 'react';
const CustomBtn = ({title, bWidth, bColor, bgColor}) => {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        backgroundColor: bgColor,
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
        borderWidth: bWidth,
        borderColor: bColor,
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
