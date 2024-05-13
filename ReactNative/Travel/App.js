import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './screens/DetailScreen';



export default function App() {


  const Stack = createNativeStackNavigator();


  return (

    <NavigationContainer>
      <Stack.Navigator options={{
        headerShown: false
      }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Details" component={DetailScreen} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer >

  );
}

