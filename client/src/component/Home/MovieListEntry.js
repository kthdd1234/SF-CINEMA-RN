import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MovieListEntry = ({ movie, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push('MovieDetails', {
          headerTitle: movie.title,
          movie: movie,
        })
      }
    >
      <View style={styles.imageWarp}>
        <Image
          style={styles.exampleImage}
          source={{
            uri: `https://image.tmdb.org/t/p/original${movie.backDrop}`,
          }}
        />
        <Text style={styles.movieTitle}>{movie.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageWarp: {
    width: wp('46.3'),
    height: hp('15'),
    marginBottom: 35,
    marginRight: wp('1'),
    marginTop: 10,
  },
  exampleImage: {
    width: '100%',
    height: '100%',
  },
  movieTitle: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

export default MovieListEntry;
