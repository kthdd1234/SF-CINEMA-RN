import React from 'react';
import { StyleSheet, View, FlatList, VirtualizedList } from 'react-native';
import MovieListEntry from './MovieListEntry';

const Item = ({ movie, navigation }) => {
  return <MovieListEntry movie={movie} navigation={navigation} />;
};

const MovieList = ({ navigation, movieList }) => {
  const renderItem = ({ item }) => {
    return <Item movie={item} navigation={navigation} />;
  };
  return (
    <View style={styles.movieList}>
      <FlatList
        data={movieList}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        style={styles.movieList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  movieList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default MovieList;
