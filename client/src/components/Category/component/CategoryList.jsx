import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import RenderItem from './RenderItem';

const CategoryList = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(20,21,23)',
    paddingLeft: 2,
    paddingRight: 2,
  },
});

export default CategoryList;
