import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import MovieList from '../Home/MovieList';

const SaveIcon = () => {
  return <AntDesign name='pluscircleo' size={80} color='srgb(48, 47, 47)' />;
};

const EmptySave = () => {
  return (
    <View style={styles.emptyWrap}>
      <SaveIcon />
      <Text style={styles.emptyText}>아직 저장한 작품이 없어요.</Text>
    </View>
  );
};

const Save = ({ profile }) => {
  const navigation = useNavigation();
  const { savedMovie } = profile;

  return (
    <View style={styles.container}>
      {savedMovie.length ? (
        <FlatList
          ListEmptyComponent={
            <MovieList movieList={savedMovie} navigation={navigation} />
          }
        />
      ) : (
        <EmptySave />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(20 ,21 ,23)',
    padding: 10,
  },
  emptyWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    marginTop: 15,
    color: 'srgb(48, 47, 47)',
    fontSize: 18,
  },
});

export default Save;
