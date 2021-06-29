import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import MovieList from './MovieList';

const MovieCollection = ({ route, navigation }) => {
  const { movieList } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={
          <View style={styles.movieListContainer}>
            <MovieList movieList={movieList} navigation={navigation} />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(20, 21, 23)',
  },
  movieListContainer: {
    padding: 10,
  },
});

export default MovieCollection;
