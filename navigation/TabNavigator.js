import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';
import NewsScreen from '../screens/NewsScreen';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const screens = [
    {name: 'Health', country: 'us', category: 'health'},
    {name: 'Tech', country: 'us', category: 'technology'},
    {name: 'Business', country: 'us', category: 'business'},
    {name: 'Sport', country: 'us', category: 'sport'},
  ];
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#DA3349',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Health"
        component={NewsScreen}
        initialParams={{
          country: screens.find(screen => screen.name === 'Health').country,
          category: screens.find(screen => screen.name === 'Health').category,
        }}
        options={{
          tabBarActiveTintColor: '#DA3349',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="heart" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Tech"
        component={NewsScreen}
        initialParams={{
          country: screens.find(screen => screen.name === 'Tech').country,
          category: screens.find(screen => screen.name === 'Tech').category,
        }}
        options={{
          tabBarActiveTintColor: '#DA3349',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="hardware-chip" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Business"
        component={NewsScreen}
        initialParams={{
          country: screens.find(screen => screen.name === 'Business').country,
          category: screens.find(screen => screen.name === 'Business').category,
        }}
        options={{
          tabBarActiveTintColor: '#DA3349',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="logo-usd" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Sport"
        component={NewsScreen}
        initialParams={{
          country: screens.find(screen => screen.name === 'Sport').country,
          category: screens.find(screen => screen.name === 'Sport').category,
        }}
        options={{
          tabBarActiveTintColor: '#DA3349',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="basketball" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
