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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Record" component={MedRecord} />
        <Tab.Screen name="Add Medicine" component={AddNewMed} />
        <Tab.Screen name="Track" component={Tracking} />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;