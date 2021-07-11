import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

interface IList {
  movieList: Array<any>
}

interface ITitle {
  title?: string;
}

const List = ({ movieList }: IList) => {
  const { push }: any = useNavigation();
  const onPress = (movie: object) => {
    const { title }: ITitle = movie;

    push('Movie', {
      headerTitle: title,
      movie: movie,
    });
  };

  return (
    <StyledList
      data={movieList}
      renderItem={({ item: movie }) => {
        const { backDrop, title } = movie;

        return (
          <TouchableOpacity onPress={() => onPress(movie)}>
            <Content>
              <BackDrop
                source={{
                  uri: `https://image.tmdb.org/t/p/original${backDrop}`,
                }}
              />
              <Title>{title}</Title>
            </Content>
          </TouchableOpacity>
        );
      }}
      keyExtractor={({ title }) => title}
    />
  );
};

const { View, Image, Text }: any = styled;

const StyledList = styled(FlatList)`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Content = View`
  margin-right: ${wp('1%')};
  margin-bottom: 15px;
`;

const BackDrop = Image`
  width: ${wp('47%')};
  height: ${hp('17%')};
`;

const Title = Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`;

export default List;
