import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import AddNewMed from './screens/AddNewMed';
import MedRecord from './screens/MedRecord';
import Tracking from './screens/Tracking';
import SettingScreen from './screens/SettingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size = "24px" }) => {
            let iconName;

            if (route.name === 'หน้าหลัก') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'ตั้งค่า') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'รายการยา') {
              iconName = focused ? 'ios-clipboard' : 'ios-clipboard-outline';
            } else if (route.name === 'เพิ่มยา') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'ประวัติการทานยา') {
              iconName = focused ? 'time-sharp' : 'time-outline';
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="หน้าหลัก" component={HomeScreen} />
        <Tab.Screen name="รายการยา" component={MedRecord} />
        <Tab.Screen name="เพิ่มยา" component={AddNewMed} />
        <Tab.Screen name="ประวัติการทานยา" component={Tracking} />
        <Tab.Screen name="ตั้งค่า" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}

export default App;