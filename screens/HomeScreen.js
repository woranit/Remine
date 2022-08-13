import { AsyncStorage } from '@react-native-async-storage/async-storage';
import * as React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

export default HomeScreen;