import React, { useCallback } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { genres, search } from '../../requests';

const characteristicList = [
  { key: 'space', characteristic: '우주 탐사', method: genres },
  { key: 'alien', characteristic: '외계인', method: genres },
  { key: 'superHero', characteristic: '슈퍼 히어로', method: genres },
  { key: 'action', characteristic: '액션', method: genres },
  { key: 'calamity', characteristic: '재난', method: genres },
  { key: 'zombie', characteristic: '좀비', method: genres },
  { key: 'timeTravel', characteristic: '시간여행', method: genres },
  { key: 'monster', characteristic: '몬스터', method: genres },
  { key: 'AI', characteristic: '가상 현실 또는 AI', method: genres },
  { key: 'disaster', characteristic: '인류 멸망 시나리오', method: search },
  { key: 'survival', characteristic: '생존 서바이벌', method: search },
  { key: 'Nolan', characteristic: '크리스토퍼 놀란', method: search },
  { key: 'Robert', characteristic: '로버트 다우니 주니어', method: search },
  { key: 'Scarlett', characteristic: '스칼렛 요한슨', method: search },
  { key: 'animation', characteristic: '애니메이션', method: search },
];

const CharacteristicItem = ({ characteristic, navigation, method }) => {
  const onPressItem = useCallback((characteristic) => {
    const getServerData = async () => {
      const count = 10;
      const CharacteristicData = await method(characteristic, count);

      navigation.navigate('MovieCollection', {
        headerTitle: characteristic,
        movieList: CharacteristicData,
      });
    };
    getServerData();
  });
  return (
    <Button
      title={characteristic}
      buttonStyle={styles.buttonWrap}
      titleStyle={styles.buttonText}
      onPress={() => onPressItem(characteristic)}
    />
  );
};

const Characteristic = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <CharacteristicItem
        characteristic={item.characteristic}
        method={item.method}
        navigation={navigation}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={characteristicList}
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

export default Characteristic;
