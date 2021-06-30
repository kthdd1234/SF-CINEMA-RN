import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import List from '../component/List';

const Collection = ({ route }) => {
  const { movieList } = route.params;

  return (
    <View style={styles.container}>
      <FlatList ListEmptyComponent={<List movieList={movieList} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgb(20, 21, 23)',
  },
});

export default Collection;
