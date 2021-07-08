import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const List = ({ movieList }) => {
  const { push }: any = useNavigation();
  const onPress = (movie) => {
    push('Movie', {
      headerTitle: movie.title,
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
      keyExtractor={(item) => item.title}
    />
  );
};

const StyledList = styled(FlatList)`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Content = styled.View`
  margin-right: ${wp('1%')};
  margin-bottom: 15px;
`;

const BackDrop = styled.Image`
  width: ${wp('47%')};
  height: ${hp('17%')};
`;

const Title = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`;

export default List;
