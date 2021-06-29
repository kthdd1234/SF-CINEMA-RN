import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import MovieList from './MovieList';

const Viewmore = ({ setViewmore }) => {
  return (
    <Button
      title={' 더보기'}
      titleStyle={{
        fontSize: 14,
        color: 'gray',
      }}
      buttonStyle={{
        backgroundColor: 'rgb(20, 21, 23)',
      }}
      onPress={() => setViewmore(true)}
    />
  );
};

const MovieListTitle = ({ icon, movieListTitle }) => {
  return (
    <Text style={styles.movieListTitle}>
      {icon} {movieListTitle}
    </Text>
  );
};

const MovieListContainer = ({ renderMovies, navigation }) => {
  const [viewmore, setViewmore] = useState(false);
  const { movieListTitle, icon, movieList } = renderMovies;

  return (
    <View style={styles.movieListContainer}>
      {!movieList.length ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size={40} color='red' />
        </View>
      ) : (
        <View style={styles.listContainer}>
          <MovieListTitle movieListTitle={movieListTitle} icon={icon} />
          <MovieList
            movieList={viewmore ? movieList : movieList.slice(0, 4)}
            navigation={navigation}
          />
          {viewmore ? null : <Viewmore setViewmore={setViewmore} />}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  movieListContainer: {
    padding: 10,
  },
  listContainer: {
    marginBottom: 10,
  },
  movieListTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },
});

export default MovieListContainer;
