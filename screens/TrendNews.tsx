import React, {useEffect, useState} from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';

import TopNewsCard from '../components/TopNewsCard';
import {getNewsFromAPI} from '../apis/News';
import {NewsResponse} from '../types/api';

const TrendNews = (
  {
    /* navigation */
  },
) => {
  const [isLoading, setLoading] = useState(true);
  const [newstech, setNewsTech] = useState<NewsResponse | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log('Fetching trending news');
        const response = await getNewsFromAPI('country=us');
        setNewsTech(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (!newstech) {
    return null;
  }

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#DA3349" />
      ) : (
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={newstech?.articles}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({item}) => <TopNewsCard item={item} />}
        />
      )}
    </View>
  );
};

export default TrendNews;
