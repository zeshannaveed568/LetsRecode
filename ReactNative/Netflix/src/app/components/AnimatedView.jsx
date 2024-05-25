import {View, Text, Pressable, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import CustomBtn from './CustomBtn';
import {X} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';

const AnimatedView = ({animateViewClose, animatedStyle}) => {
  const navigation = useNavigation();

  return (
    <Animated.View
      style={[
        {
          width: '100%',
          height: '150%',
          position: 'absolute',
          top: 0,
          backgroundColor: 'white',
          padding: 10,
          paddingTop: 20,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        animatedStyle,
      ]}>
      <TouchableOpacity
        onPress={animateViewClose}
        style={{
          position: 'absolute',
          top: 40,
          right: 20,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          zIndex: 100,
          padding: 10,
        }}>
        <X color={'black'} size={24} />
      </TouchableOpacity>

      <View
        style={{
          marginVertical: 40,
          marginHorizontal: 10,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Montserrat',
              color: '#0F0E0E',
              fontWeight: 'medium',
              letterSpacing: 0.3,
              marginBottom: 10,
            }}>
            Ready to Watch?
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Montserrat',
              fontWeight: 'normal',
              color: '#646161',
              marginHorizontal: 10,
              textAlign: 'center',
            }}>
            Enter your email to create or sign in to your account.
          </Text>

          <TextInput
            style={{
              height: 70,
              width: '100%',
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 5,
              marginTop: 20,
              marginBottom: 10,
              padding: 10,
            }}
            placeholder={'Email'}
          />
        </View>
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <CustomBtn title={'GETTING STARTED'} bgColor={'#C60A0A'} />
        </Pressable>
      </View>
    </Animated.View>
  );
};

export default AnimatedView;
