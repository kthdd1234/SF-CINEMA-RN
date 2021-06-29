import React, { useCallback } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { Button } from 'react-native-elements';
import { movieSeries } from '../../../requests';

const seriesList = [
  { key: 'The Avengers', series: '어벤져스' },
  { key: 'Transformers', series: '트랜스포머' },
  { key: '28 Days Later', series: '28일 후' },
  { key: 'Batman', series: '배트맨' },
  { key: 'Men In Black', series: '맨 인 블랙' },
  { key: 'Blade Runner', series: '블레이드 러너' },
  { key: 'Back to the Future', series: '백 투 더 퓨쳐' },
  { key: 'Planet of the Apes', series: '혹성탈출' },
  { key: 'Divergent', series: '다이버전트' },
  { key: 'The Hunger Games', series: '헝거게임' },
  { key: 'The Maze Runner', series: '메이즈 러너' },
  { key: 'Thor', series: '토르' },
  { key: 'Guardians of the Galaxy', series: '가디언즈 오브 갤럭시' },
  { key: 'Cloverfield', series: '클로버필드' },
  { key: 'The Terminator', series: '터미네이터' },
  { key: 'Captain America', series: '캡틴 아메리카' },
  { key: 'Spiderman', series: '스파이더맨' },
  { key: 'Pacific Rim', series: '퍼시픽 림' },
  { key: 'Star Trek', series: '스타트렉' },
  { key: 'Star Wars', series: '스타워즈' },
  { key: 'Alien', series: '에이리언' },
  { key: 'Resident Evil', series: '레지던트 이블' },
  { key: 'Iron Man', series: '아이언맨' },
  { key: 'Ant-Man', series: '앤트맨' },
  { key: 'Deadpool', series: '데드풀' },
  { key: 'X-MEN', series: '엑스맨' },
  { key: 'A Quiet Place', series: '콰이어트 플레이스' },
  { key: 'Jurassic World', series: '쥬라기 월드' },
];

const SeriesItem = ({ series, navigation }) => {
  const onPressSeriesItem = useCallback((series) => {
    const getSeriesData = async () => {
      const seriesList = await movieSeries(series);
      navigation.navigate('MovieCollection', {
        headerTitle: series,
        movieList: seriesList,
      });
    };
    getSeriesData();
  });

  return (
    <Button
      title={series}
      buttonStyle={styles.buttonWrap}
      titleStyle={styles.buttonText}
      onPress={() => onPressSeriesItem(series)}
    />
  );
};

const Series = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return <SeriesItem series={item.series} navigation={navigation} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={seriesList}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(20,21,23)',
    paddingLeft: 2,
    paddingRight: 2,
  },
  buttonWrap: {
    backgroundColor: 'rgb(20, 21, 23)',
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: 'srgb(48, 47, 47)',
    borderBottomWidth: 1,
  },
  buttonText: {
    color: 'whitesmoke',
    paddingLeft: 0,
    flex: 1,
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Series;
