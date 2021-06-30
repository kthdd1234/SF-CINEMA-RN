import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Content from '../component/Content';

const List = ({ movieList }) => {
  const RenderItem = ({ item }) => {
    const { movie } = item;
    return <Content movie={movie} />;
  };

  return (
    <View style={styles.movieList}>
      <FlatList
        data={movieList}
        renderItem={RenderItem}
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

export default List;
