import React, {useEffect, useState} from 'react';
import { StyleSheet, FlatList, View, ActivityIndicator} from 'react-native';

import TopNewsCard from '../components/TopNewsCard';
import { getNewsFromAPI } from '../apis/News';

const TrendNews = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [newstech, setNewsTech] = useState([]);

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
        <ActivityIndicator visible={true} />
      ) : (
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={newstech.articles}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({item}) => <TopNewsCard item={item} />}
        />
      )}
    </View>
  );
};

export default TrendNews;
