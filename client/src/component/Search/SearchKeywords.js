import React, { useCallback } from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { contents } from '../../requests';

const SearchKeywordItem = ({ keyword, movieId, backDrop, navigation }) => {
  const onPressKeyword = useCallback((movieId) => {
    const getContentsData = async () => {
      const movie = await contents(movieId);
      navigation.navigate('Movie', {
        headerTitle: keyword,
        movie: movie,
      });
    };
    getContentsData();
  });
  return (
    <Button
      title={keyword}
      icon={
        <Image
          style={styles.movieBackDrop}
          source={{
            uri: `https://image.tmdb.org/t/p/original${backDrop}`,
          }}
        />
      }
      buttonStyle={{
        backgroundColor: 'rgb(20, 21, 23)',
        borderBottomColor: 'srgb(48, 47, 47)',
        borderBottomWidth: 1,
        paddingLeft: 0,
      }}
      titleStyle={{
        flex: 1,
        textAlign: 'left',

        fontSize: 17,
        color: 'whitesmoke',
      }}
      onPress={() => onPressKeyword(movieId)}
    />
  );
};

const SearchKeywords = ({ navigation, searchResult }) => {
  const renderItem = ({ item }) => {
    return (
      <SearchKeywordItem
        keyword={item.title}
        movieId={item.id}
        backDrop={item.backDrop}
        navigation={navigation}
      />
    );
  };
  return (
    <View
      style={{
        marginBottom: 25,
      }}
    >
      {
        <FlatList
          data={searchResult}
          renderItem={renderItem}
          keyExtractor={(item) => item.titleEng}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  movieContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: 'srgb(48, 47, 47)',
    borderBottomWidth: 1,
  },
  movieTitle: {
    fontSize: 17,
    color: 'whitesmoke',
    marginLeft: 10,
  },
  movieBackDrop: {
    resizeMode: 'contain',
    width: 120,
    height: 75,
    marginRight: 10,
  },
});

export default SearchKeywords;
