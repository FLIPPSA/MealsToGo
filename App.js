import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { RestaurantsScreen } from './src/pages/restaurants.page';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Map } from './src/pages/map.page';
import { Settings } from './src/pages/settings.page';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantContextProvider } from './src/utils/restaurants.context';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <RestaurantContextProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} options={{tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />)}} />
            <Tab.Screen name="Map" component={Map} options={{tabBarLabel: 'Map', tabBarIcon: ({ color, size }) => (<Ionicons name="map" color={color} size={size} />)}}/>
            <Tab.Screen name="Settings" component={Settings} options={{tabBarLabel: 'Settings', tabBarIcon: ({ color, size }) => (<Ionicons name="settings" color={color} size={size} />)}}/>
          </Tab.Navigator>
        </NavigationContainer>
      </RestaurantContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
});