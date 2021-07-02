import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const Content = ({ movie }) => {
  const { push } = useNavigation();
  const { backDrop, title } = movie;
  const source = { uri: `https://image.tmdb.org/t/p/original${backDrop}` };
  const onPress = () => {
    push('Movie', {
      headerTitle: movie.title,
      movie: movie,
    });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <StyledContent>
        <BackDrop source={source} />
        <Title>{title}</Title>
      </StyledContent>
    </TouchableOpacity>
  );
};

const StyledContent = styled.View`
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

export default Content;
