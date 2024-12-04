import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';

import NewsScreen from '../screens/NewsScreen';
import Home from '../screens/Home';
import {
  IconName,
  IconProps,
  ScreenConfig,
  TabParamList,
} from '../types/screens';

const TabIcon = ({
  name,
  color,
  size = 30,
}: {
  name: IconName;
  color: string;
  size?: number;
}) => <Ionicons name={name} color={color} size={size} />;

const HomeIcon = ({color}: {color: string; size: number}) => (
  <Ionicons name="home" color={color} size={30} />
);
// Icon configurations
const icons = [
  {name: 'heart', component: 'HealthIcon'},
  {name: 'hardware-chip', component: 'TechIcon'},
  {name: 'logo-usd', component: 'BusinessIcon'},
  {name: 'basketball', component: 'SportIcon'},
] as const;

// Generate icon components
const iconComponents = icons.reduce(
  (acc, {name, component}) => ({
    ...acc,
    [component]: (props: IconProps) => <TabIcon name={name} {...props} />,
  }),
  {} as Record<string, (props: IconProps) => JSX.Element>,
);

export const {HealthIcon, TechIcon, BusinessIcon, SportIcon} = iconComponents;

const Tab = createBottomTabNavigator<TabParamList>();

const BottomTabNavigator = () => {
  const screens: ScreenConfig[] = [
    {name: 'Health', country: 'us', category: 'health', icon: HealthIcon},
    {name: 'Tech', country: 'us', category: 'technology', icon: TechIcon},
    {name: 'Business', country: 'us', category: 'business', icon: BusinessIcon},
    {name: 'Sport', country: 'us', category: 'sport', icon: SportIcon},
  ];
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#DA3349',
          tabBarIcon: HomeIcon,
        }}
      />
      {screens.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={NewsScreen}
          initialParams={{
            country: screen.country,
            category: screen.category,
          }}
          options={{
            tabBarActiveTintColor: '#DA3349',
            tabBarIcon: screen.icon,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
