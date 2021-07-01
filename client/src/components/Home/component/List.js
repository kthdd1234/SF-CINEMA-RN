import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Content from './Content';

const List = ({ movieList }) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={movieList}
        renderItem={({ item }) => <Content movie={item} />}
        keyExtractor={(item) => item.title}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default List;
