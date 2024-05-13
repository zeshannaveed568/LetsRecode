import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 5000);
  }, []);

  return (
    <LottieView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}
      source={require('../../assets/anim/netflix.json')}
      autoPlay
    />
  );
};

export default SplashScreen;
