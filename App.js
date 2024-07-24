import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { RestaurantsScreen } from './src/pages/restaurants.page';
import { theme } from './src/utils/design';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Map } from './src/pages/map.page';
import Settings from './src/pages/settings.page';
import map from './assets/icons/map'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Restaurants" component={() => <RestaurantsScreen />} options={{tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />)}} />
          <Tab.Screen name="Map" component={() => <Map />} options={{tabBarLabel: 'Map', tabBarIcon: ({ color, size }) => (<Ionicons name="map" color={color} size={size} />)}}/>
          <Tab.Screen name="Settings" component={() => <Settings />} options={{tabBarLabel: 'Settings', tabBarIcon: ({ color, size }) => (<Ionicons name="settings" color={color} size={size} />)}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
});