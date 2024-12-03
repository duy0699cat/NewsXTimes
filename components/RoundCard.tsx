import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import themeContext from '../config/themeContext';
import {RoundCardProps} from '../types/screens';

const {width /* , height */} = Dimensions.get('window');

const Card: React.FC<RoundCardProps> = ({
  onPress,
  image /* , navigation */,
}) => {
  const theme = useContext(themeContext);
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[styles.container, {backgroundColor: theme.cardBackground}]}>
        <Image source={image} style={styles.imageDim} />
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    height: 60,
    width: 60,
  },
  imageDim: {
    width: 60,
    height: 60,
  },
  author: {
    width: width,
    marginTop: -10,
    marginHorizontal: width * 0.03,
    color: 'darkgray',
  },
  desc: {
    width: width,
    marginTop: 10,
    marginHorizontal: width * 0.03,
    color: 'gray',
    maxWidth: width * 0.8,
  },
});

export default Card;
