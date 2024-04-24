
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen"

const Stack = createNativeStackNavigator();

export default function Navigation() {
  

  return (
    
    
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='home' component={HomeScreen}/>
        <Stack.Screen name="restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
  
  );
}
