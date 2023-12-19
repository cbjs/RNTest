import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { useWindowDimensions } from 'react-native';
import Detail from './Detail';
import Home from './Home';

export type RootStackParamList = {
    home: undefined,
    detail: {id:number, title: string, content: string}
};
const Stack = createStackNavigator<RootStackParamList>() 
export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

function Navigator(): JSX.Element {
    const { width } = useWindowDimensions();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='home'
                screenOptions={{
                    gestureDirection: 'horizontal',
                    gestureEnabled: true,
                    gestureResponseDistance: width * 0.8,
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerShown: false
                }}>
                <Stack.Screen name='home' component={Home} />
                <Stack.Screen name='detail' component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
        // </ThemeContext.Provider>
    );
}

export default Navigator;