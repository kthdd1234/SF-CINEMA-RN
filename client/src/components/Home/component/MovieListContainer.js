import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import List from './List';

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

const ListTitle = ({ icon, movieListTitle }) => {
  return (
    <Text style={styles.movieListTitle}>
      {icon} {movieListTitle}
    </Text>
  );
};

const MovieListContainer = ({ renderMovies }) => {
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
          <ListTitle movieListTitle={movieListTitle} icon={icon} />
          <List movieList={viewmore ? movieList : movieList.slice(0, 4)} />
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
