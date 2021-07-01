import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const Content = ({ movie }) => {
  const navigation = useNavigation();
  const { backDrop, title } = movie;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push('Movie', {
          headerTitle: movie.title,
          movie: movie,
        })
      }
    >
      <View style={styles.imageWarp}>
        <Image
          style={styles.exampleImage}
          source={{
            uri: `https://image.tmdb.org/t/p/original${backDrop}`,
          }}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageWarp: {
    width: wp('46'),
    height: hp('16'),
    marginBottom: 35,
    marginRight: wp('1'),
    marginTop: 10,
  },
  exampleImage: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

export default Content;
