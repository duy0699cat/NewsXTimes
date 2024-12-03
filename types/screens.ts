import { Article } from './api';
import { ImageSourcePropType } from 'react-native';
import {RouteProp} from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export interface CardProps {
  item: Article;
  onPress?: () => void;
}


export interface RoundCardProps {
  onPress: () => void;  // Function type with no parameters and no return value
  image: ImageSourcePropType;  // For the image prop
}

// This defines what parameters the screen accepts
export type NewsScreenParams = {
  country: string;
  category: string;
};

// This creates a 'route' type for screen
export type NewsScreenRouteProp = RouteProp<
  {
    News: NewsScreenParams; // First 'News' - Key in ParamList
  },
  'News' // Second 'News' - Screen name
>;

export type RootStackParamList = {
  Home: undefined;
  News: { country: string; category: string };
  TrendNews: { country: string; category: string };
  // Add other screens here
};

export type RootDrawerParamList = {
  Home: undefined;
  News: { country: string; category: string };
  TrendNews: { country: string; category: string };
  // Add other drawer screens
};

export type HomeScreenNavigationProp = DrawerNavigationProp<
  RootDrawerParamList,
  'Home'
>;
