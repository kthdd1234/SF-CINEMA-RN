import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { contents } from '../../../Home/screen/Movie/request';
import styled from 'styled-components';

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

  const { btnStyle, titleStyle } = styles;

  return (
    <Button
      title={title}
      icon={<BackDrop source={source} />}
      buttonStyle={btnStyle}
      titleStyle={titleStyle}
      onPress={onPressKeyword}
    />
  );
};

const BackDrop = styled(Image)`
  width: 120px;
  height: 75px;
  margin-right: 10px;
  resize-mode: contain;
`;

const styles = StyleSheet.create({
  btnStyle: {
    paddingLeft: 0,
    backgroundColor: 'rgb(20, 21, 23)',
    borderBottomColor: 'srgb(48, 47, 47)',
    borderBottomWidth: 1,
  },
  titleStyle: {
    flex: 1,
    textAlign: 'left',
    fontSize: 17,
    color: 'whitesmoke',
  },
});

export default Item;
