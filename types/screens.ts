import { Article } from './api';
import { ImageSourcePropType } from 'react-native';



export interface CardProps {
  item: Article;
  onPress?: () => void;
}


export interface RoundCardProps {
  onPress: () => void;  // Function type with no parameters and no return value
  image: ImageSourcePropType;  // For the image prop
}
