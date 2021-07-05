import React from 'react';
import { Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const BackDrop = ({ userRating, numberOfLikes, backDrop }) => {
  const source = {
    uri: `https://image.tmdb.org/t/p/original${backDrop}`,
  };
  const rating = [
    { sub: '유저평점', value: userRating, color: 'tomato' },
    { sub: '재밌어요', value: numberOfLikes, color: 'whitesmoke' },
  ];

  return (
    <StyledBackDrop>
      <BackDropImg source={source} />
      <Rating>
        {rating.map(({ sub, value, color }, ratingIdx) => (
          <Wrapper color={color} key={ratingIdx}>
            <Property color={color}>{sub}</Property>
            <Property color={color}>{value}</Property>
          </Wrapper>
        ))}
      </Rating>
      <Shadow
        colors={['transparent', 'rgb(20, 21, 23)']}
        end={{ x: 0, y: 1 }}
      />
    </StyledBackDrop>
  );
};

const StyledBackDrop = styled.View`
  position: relative;
`;

const BackDropImg = styled(Image)`
  width: ${SCREEN_WIDTH};
  height: ${hp('35%')};
`;

const Rating = styled.View`
  position: absolute;
  flex-direction: row;
  left: 13px;
  bottom: 20px;
  z-index: 2;
`;

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 60px;
  margin-right: 10px;
  border-width: 1px;
  border-color: ${({ color }) => color};
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: black;
  opacity: 0.8;
`;

const Property = styled.Text`
  margin-left: 5px;
  color: ${({ color }) => color};
`;

const Shadow = styled(LinearGradient)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 40;
`;

export default BackDrop;
