import React from 'react';
import { StyleSheet, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { contents } from '../../../requests';

const Item = ({ item }) => {
  const { navigate } = useNavigation();
  const { id, title, backDrop } = item;
  const source = {
    uri: `https://image.tmdb.org/t/p/original${backDrop}`,
  };

  const onPressKeyword = async () => {
    const movie = await contents(id);

    navigate('Movie', {
      headerTitle: title,
      movie: movie,
    });
  };

  return (
    <Button
      title={title}
      icon={<Image style={styles.movieBackDrop} source={source} />}
      buttonStyle={{
        backgroundColor: 'rgb(20, 21, 23)',
        borderBottomColor: 'srgb(48, 47, 47)',
        borderBottomWidth: 1,
        paddingLeft: 0,
      }}
      titleStyle={{
        flex: 1,
        textAlign: 'left',
        fontSize: 17,
        color: 'whitesmoke',
      }}
      onPress={onPressKeyword}
    />
  );
};

const SearchKeywords = ({ searchResult }) => {
  return (
    <FlatList
      style={{ marginBottom: 25 }}
      data={searchResult}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.titleEng}
    />
  );
};

const styles = StyleSheet.create({
  movieContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: 'srgb(48, 47, 47)',
    borderBottomWidth: 1,
  },
  movieTitle: {
    fontSize: 17,
    color: 'whitesmoke',
    marginLeft: 10,
  },
  movieBackDrop: {
    resizeMode: 'contain',
    width: 120,
    height: 75,
    marginRight: 10,
  },
});

export default SearchKeywords;
