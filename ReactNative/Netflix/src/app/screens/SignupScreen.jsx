import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text
        style={{
          color: 'black',
        }}>
        SignupScreen
      </Text>
    </View>
  );
};

export default SignupScreen;
