import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Intro = ({ mainSub, sentence1, sentence2 }) => {
  return (
    <View style={styles.intro}>
      <Text style={styles.mainSub}>{mainSub}</Text>
      <Text style={styles.sentence}>{sentence1}</Text>
      <Text style={styles.sentence}>{sentence2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  intro: {
    position: 'absolute',
    bottom: 0,
    left: 11,
    marginBottom: 40,
  },
  mainSub: {
    color: 'white',
    fontSize: 31,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sentence: {
    color: 'rgb(222, 218, 209)',
    fontSize: 15,
  },
});

export default Intro;
