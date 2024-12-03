import React, { useEffect, useState } from 'react';
// import { Switch } from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';

import {Ionicons} from '@react-native-vector-icons/ionicons';

import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners';
import theme from '../config/theme';
import themeContext from '../config/themeContext';

import TabNavigator from './TabNavigator';

import DrawerContent from './DrawerContent';
import NewsScreen from '../screens/NewsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const screens = [
    { name: 'India', country: 'in', category: 'general' },
    { name: 'US', country: 'us', category: 'general' },
    { name: 'Canada', country: 'ca', category: 'general' },
    { name: 'Australia', country: 'au', category: 'general' },
    { name: 'New Zealand', country: 'nz', category: 'general' },
    { name: 'Japan', country: 'jp', category: 'general' },
    { name: 'Germany', country: 'de', category: 'general' },
  ];
  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      'themeChange',
      (data) => {
        setIsEnabled(data);
        console.log(data);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });

  return (
    <themeContext.Provider
      value={isEnabled === true ? theme.light : theme.dark}
    >
      <NavigationContainer
        theme={isEnabled === true ? DarkTheme : DefaultTheme}
      >
        <Drawer.Navigator
          initialRouteName="HomeDrawer"
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen
            name="HomeDrawer"
            component={TabNavigator}
            options={{
              headerShown: false,
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name="home"
                  size={size}
                  color={focused ? '#2E5BE3' : '#Da3349'}
                />
              ),
            }}
          />
          {screens.map((screen, index) => (
            <Drawer.Screen
              key={index}
              name={screen.name}
              component={NewsScreen}
              initialParams={{
                country: screen.country,
                category: screen.category,
              }}
              options={{
                headerShown: true,
                drawerIcon: ({ focused, size }) => (
                  <Ionicons
                    name="home"
                    size={size}
                    color={focused ? '#2E5BE3' : '#Da3349'}
                  />
                ),
              }}
            />
          ))}
        </Drawer.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
};

export default DrawerNavigator;
