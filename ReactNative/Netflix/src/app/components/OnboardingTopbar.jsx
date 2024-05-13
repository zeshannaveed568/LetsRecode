import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {EllipsisVertical} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';

const OnboardingTopbar = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 100,
      }}>
      <View>
        <Image
          source={require('../../assets/netflix-logo.webp')}
          style={{width: 50, height: 50}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10,
          paddingVertical: 10,
          paddingHorizontal: 5,
        }}>
        <Pressable>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 14,
            }}>
            PRIVACY
          </Text>
        </Pressable>
        <Pressable onPress={handleLoginPress}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 14,
            }}>
            LOGIN
          </Text>
        </Pressable>
        <Pressable>
          <EllipsisVertical color={'gray'} />
        </Pressable>
      </View>
    </View>
  );
};

export default OnboardingTopbar;
