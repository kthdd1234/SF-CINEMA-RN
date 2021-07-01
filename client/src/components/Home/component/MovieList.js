import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Viewmore from './Viewmore';
import ListTitle from './ListTitle';
import List from './List';
import Loding from './Loding';

const ListContainer = ({
  listTitle,
  movieList,
  icon,
  viewmore,
  setViewmore,
}) => {
  return (
    <View style={styles.listContainer}>
      <ListTitle listTitle={listTitle} icon={icon} />
      <List movieList={viewmore ? movieList : movieList.slice(0, 4)} />
      {viewmore ? null : <Viewmore setViewmore={setViewmore} />}
    </View>
  );
};

const MovieList = ({ item }) => {
  const [viewmore, setViewmore] = useState(false);
  const { listTitle, icon, movieList } = item;

  return (
    <View style={styles.movieListContainer}>
      {movieList.length ? (
        <ListContainer
          listTitle={listTitle}
          movieList={movieList}
          icon={icon}
          viewmore={viewmore}
          setViewmore={setViewmore}
        />
      ) : (
        <Loding />
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
});

export default MovieList;
