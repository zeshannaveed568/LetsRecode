import {View, Text, Pressable} from 'react-native';
import React from 'react';
import CustomBtn from '../components/CustomBtn';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import AnimatedView from '../components/AnimatedView';
import OnboardingCarousel from '../components/OnboardingCarousel';
import OnboardingTopbar from '../components/OnboardingTopbar';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const translateY = useSharedValue(300);
  const opacity = useSharedValue(0);
  const zIndex = useSharedValue(-100);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(opacity.value, {duration: 300}),
    transform: [{translateY: withSpring(translateY.value)}],
    zIndex: zIndex.value,
  }));

  const animateView = () => {
    translateY.value = 0;
    opacity.value = 1;
    zIndex.value = 100;
  };

  const animateViewClose = () => {
    translateY.value = 300;
    opacity.value = 0;
    zIndex.value = -100;
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          top: 0,
        }}>
        <OnboardingTopbar />
      </View>

      <View>
        <OnboardingCarousel />
      </View>
      <Pressable
        onPress={animateView}
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 20,
        }}>
        <CustomBtn title={'GET STARTED'} />
      </Pressable>

      <AnimatedView
        animateViewClose={animateViewClose}
        animatedStyle={animatedStyle}
      />
    </View>
  );
};

export default OnboardingScreen;
