import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Card from '../components/Card';
import {getNewsFromAPI} from '../apis/News';
import themeContext from '../config/themeContext';

const NewsScreen = ({route}) => {
  const {country, category} = route.params;
  const [isLoading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNewsFromAPI(
          `country=${country}&category=${category}`,
        );
        setNews(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, country]);
  if (!news) {
    return null;
  }
  const theme = useContext(themeContext);

  return (
    <View style={{backgroundColor: theme.backColor}}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#DA3349" />
      ) : (
        <FlatList
          data={news.articles}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({item}) => <Card item={item} />}
          nestedScrollEnabled={true}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  midText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
  },
});

export default NewsScreen;
