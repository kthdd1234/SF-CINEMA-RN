import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import List from '../Home/screen/Main/component/List';

const LikeIcon = () => {
  return <AntDesign name='like2' size={80} color='srgb(48, 47, 47)' />;
};

const EmptyLike = () => {
  return (
    <View style={styles.emptyWrap}>
      <LikeIcon />
      <Text style={styles.emptyText}>아직 재밌어요를 누른 작품이 없어요.</Text>
    </View>
  );
};

const Like = ({ profile }) => {
  const navigation = useNavigation();
  const { likedMovie } = profile;

  return (
    <View style={styles.container}>
      {likedMovie.length ? (
        <FlatList
          ListEmptyComponent={
            <List movieList={likedMovie} navigation={navigation} />
          }
        />
      ) : (
        <EmptyLike />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(20, 21, 23)',
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

export default Like;
