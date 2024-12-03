import React, {useEffect, useState, useContext} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import Card from '../components/Card';
import {getNewsFromAPI} from '../apis/News';
import themeContext from '../config/themeContext';
import {RouteProp} from '@react-navigation/native';
import {NewsResponse} from '../types/api';
// Define types for typescript
// This defines what parameters your screen accepts
type NewsScreenParams = {
  country: string;
  category: string;
};
// This creates a 'route' type for your screen
type NewsScreenRouteProp = RouteProp<
  {
    News: NewsScreenParams; // First 'News' - Key in ParamList
  },
  'News' // Second 'News' - Screen name
>;

const NewsScreen = ({route}: {route: NewsScreenRouteProp}) => {
  const {country, category} = route.params;
  const [isLoading, setLoading] = useState(true);
  const [news, setNews] = useState<NewsResponse | null>(null);
  const theme = useContext(themeContext);

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

  return (
    <View style={{backgroundColor: theme.backColor}}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#DA3349" />
      ) : (
        <FlatList
          data={news?.articles}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({item}) => <Card item={item} onPress={undefined} />}
          nestedScrollEnabled={true}
        />
      )}
    </View>
  );
};

export default NewsScreen;
