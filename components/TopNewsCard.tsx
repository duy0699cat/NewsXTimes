/* eslint-disable react-native/no-inline-styles */
import Ionicons from '@react-native-vector-icons/ionicons';
import {formatDate} from '../utils/formatter';
import React, {useContext, useState} from 'react';
import {
  Modal,
  TouchableOpacity,
  Share,
  Button,
  View,
  StyleSheet,
  Image,
  Dimensions,
  // Linking,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import WebView from 'react-native-webview';
import themeContext from '../config/themeContext';
import {CardProps} from '../types/screens';

const {width/* , height */} = Dimensions.get('window');

const Card: React.FC<CardProps> = ({item /* , onPress8 */}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useContext(themeContext);
  //onPress={() => Linking.openURL(item.url)} >

  //handleShare
  const handleShare = () => {
    const {url, title} = item; //get url and title form our prop
    var message = `${title} \n\n Read More ${url} \n\n Shared via The NewsXTimes`; // custome message
    return Share.share(
      {title, message, url: message},
      {dialogTitle: `Share ${title}`},
    );
  };

  return (
    <View>
      <TouchableNativeFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View
          style={{
            margin: 15,
            borderRadius: 15,
            backgroundColor: theme.cardBackground,
            width: 200,
            height: 220,
            overflow: 'hidden',
            elevation: 3,
          }}>
          <Image source={{uri: item.urlToImage}} style={styles.image} />
          <Text
            style={{
              width: width,
              marginHorizontal: width * 0.03,
              marginVertical: width * 0.03,
              fontSize: 15,
              fontWeight: 'bold',
              color: theme.textColor,
              maxWidth: width * 0.45,
            }}
            numberOfLines={2}>
            {item.title ? item.title : 'Not Available'}
          </Text>
          <Text style={styles.author}>
            {' '}
            {item.author ? item.author : 'Not Available'}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                backgroundColor: theme.headerColor,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                width: 130,
                padding: 2,
                elevation: 3,
                marginLeft: 10,
                marginTop: 5,
              }}>
              <Text style={styles.cardText}>
                🕘 {formatDate(item.publishedAt)}
              </Text>
            </View>
            <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
              <Ionicons name="share-social" color={theme.textColor} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableNativeFeedback>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        statusBarTranslucent={false}>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            marginTop: 5,
            overflow: 'hidden',
            flexDirection: 'column',
          }}>
          <View>
            <Button
              title="Close"
              onPress={() => setModalVisible(!modalVisible)}
              color={'#252525'}
            />
            <Button title="Share" onPress={handleShare} color={'#DA3349'} />
          </View>
          <WebView source={{uri: item.url}} />
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  cardText: {
    fontSize: 10,
    color: 'white',
  },
  shareButton: {
    justifyContent: 'center',
    marginRight: 10,
  },
  image: {
    width: 200,
    height: 100,
  },
  author: {
    width: width,
    marginTop: -10,
    marginHorizontal: width * 0.03,
    color: 'darkgray',
    maxWidth: width * 0.4,
  },
});

export default Card;

//cardBackground