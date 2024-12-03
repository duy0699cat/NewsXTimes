/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import {getNewsFromAPI} from '../apis/News';
import Card from '../components/Card';
import TrendNews from './TrendNews';

import themeContext from '../config/themeContext';
import NewsResponse from '../types/api';
import {HomeScreenNavigationProp} from '../types/screens';

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

//API call
const Home: React.FC<HomeProps> = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [news, setNews] = useState<NewsResponse | null>(null);
  //Theme
  const theme = useContext(themeContext);
  //const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log('Fetching recent news');
        const response = await getNewsFromAPI('country=us');
        setNews(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (!news) {
    return null;
  }

  //Dates
  var date = new Date().getDate();
  function months() {
    var month = new Date().getMonth() + 1; //To get the Current Month

    if (month === 1) {
      return 'January';
    } else if (month === 2) {
      return 'February';
    } else if (month === 3) {
      return 'March';
    } else if (month === 4) {
      return 'April';
    } else if (month === 5) {
      return 'May';
    } else if (month === 6) {
      return 'June';
    } else if (month === 7) {
      return 'July';
    } else if (month === 8) {
      return 'August';
    } else if (month === 9) {
      return 'September';
    } else if (month === 10) {
      return 'October';
    } else if (month === 11) {
      return 'November';
    } else if (month === 12) {
      return 'December';
    }
  }
  var year = new Date().getFullYear();

  return (
    <View style={{backgroundColor: theme.backColor}}>
      <StatusBar backgroundColor={theme.statusColor} />
      <View
        style={{
          backgroundColor: theme.headerColor,
          flexDirection: 'row',
          justifyContent: 'space-between',
          elevation: 8,
        }}>
        <Image
          source={require('../assets/img/header-logo.png')}
          style={{
            width: 65,
            height: 65,
            alignSelf: 'flex-start',
            paddingLeft: 10,
            marginLeft: 10,
          }}
        />
        <Text style={styles.mainText}>News X Times</Text>
      </View>
      {/* Replaced ScrollView with FlatList */}
      <FlatList
        ListHeaderComponent={
          <View>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{
                backgroundColor: theme.cardBackground,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                width: 140,
                padding: 10,
                marginTop: 20,
                marginLeft: 20,
                elevation: 3,
              }}>
              <Text
                style={{
                  color: theme.textColor,
                  fontSize: 17,
                  fontWeight: 'bold',
                }}>
                📅 {months()} {date} {year}
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                marginTop: 10,
                marginLeft: 20,
                color: theme.textColor,
              }}>
              Trending News
            </Text>
            {isLoading ? (
              <ActivityIndicator size="large" color="#DA3349" />
            ) : (
              <TrendNews />
            )}

            <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 0.5,
                width: '90%',
                alignSelf: 'center',
                marginTop: 5,
              }}
            />
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                marginTop: 10,
                marginLeft: 20,
                color: theme.textColor,
              }}>
              Recent News
            </Text>
          </View>
        }
        data={news.articles}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => <Card item={item} />}
        nestedScrollEnabled={true}
        style={{marginBottom: 65}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 60,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Home;
