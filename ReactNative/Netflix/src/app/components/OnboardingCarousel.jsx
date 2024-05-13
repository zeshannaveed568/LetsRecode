import * as React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import carouseldata from '../../utils/data';

const OnboardingCarousel = () => {
  const [dot, setDots] = React.useState(0);

  const width = Dimensions.get('window').width;
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <Carousel
        pagingEnabled={true}
        panGestureHandlerProps={{enabled: true}}
        width={width}
        height={'100%'}
        loop={false}
        data={[...new Array(4).keys()]}
        scrollAnimationDuration={300}
        onSnapToItem={index => {
          setDots(index);
        }}
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
            }}>
            <Image
              source={carouseldata.map(item => item.image)[index]}
              style={{width: width, height: '100%', objectFit: 'cover'}}
            />

            <View
              style={{
                position: 'absolute',
                bottom: '15%',
                width: '100%',
                paddingHorizontal: 30,
                paddingVertical: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 42,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  textAlign: 'center',
                  marginBottom: 20,
                }}>
                {carouseldata.map(item => item.title)[index]}
              </Text>
              <Text
                style={{
                  color: 'rgba(255, 255, 255,0.8)',
                  fontSize: 16,
                  letterSpacing: 0.5,
                  fontWeight: 300,
                  textAlign: 'center',
                }}>
                {carouseldata.map(item => item.description)[index]}
              </Text>
            </View>
          </View>
        )}
      />

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          position: 'absolute',
          bottom: '9%',
          justifyContent: 'center',
        }}>
        {[1, 2, 3, 4].map((item, index) => (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              backgroundColor:
                dot === index ? 'red' : 'rgba(255, 255, 255,0.5)',
              borderRadius: 5,
              marginHorizontal: 5,
            }}></View>
        ))}
      </View>
    </View>
  );
};

export default OnboardingCarousel;
