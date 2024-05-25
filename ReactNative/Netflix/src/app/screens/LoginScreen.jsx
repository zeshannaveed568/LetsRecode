import {View, Text, Pressable, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowLeft} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';
import CustomBtn from '../components/CustomBtn';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignIn = () => {};

  const handleUseSignInCode = () => {};

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleSignUp = () => {
    navigation.navigate('Onboarding');
  };

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 50,
          }}
          onPress={handleBack}>
          <ArrowLeft color={'white'} />
        </TouchableOpacity>

        <Image
          source={require('../../assets/netflix-logo-vertical.png')}
          style={{width: '25%', height: 60, objectFit: 'contain'}}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
          gap: 5,
        }}>
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Sign In
          </Text>
        </View>

        <CustomBtn
          title="Sign In"
          bWidth={2}
          bColor="white"
          bgColor="transparent"
        />
        <Text
          style={{
            color: 'rgba(255, 255, 255, 0.5)',
          }}>
          OR
        </Text>

        <CustomBtn
          title="Use a Sign-In Code"
          bWidth={0}
          bColor="transparent"
          bgColor="rgba(255, 255, 255, 0.2)"
        />

        <TouchableOpacity
          onPress={handleForgotPassword}
          style={{
            paddingHorizontal: 10,
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: 'white',
              marginVertical: 10,
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSignUp}
          style={{
            paddingHorizontal: 10,
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: 'white',
              marginVertical: 10,
            }}>
            New to Netflix? Sign up now.
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 10,
            color: 'rgba(255, 255, 255, 0.5)',
            textAlign: 'left',
            marginVertical: 20,
            paddingHorizontal: 10,
          }}>
          Sign in is protected by Google reCAPTCHA to ensure you're not a bot.
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
