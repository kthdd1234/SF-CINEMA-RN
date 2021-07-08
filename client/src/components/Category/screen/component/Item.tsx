import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';

const Item = ({ item }) => {
  const { value, method } = item;
  const { buttonStyle, titleStyle } = styles
  const navigation = useNavigation();

  const onPress = async () => {
    const data = await method(value);

    navigation.navigate('Collection', {
      headerTitle: value,
      movieList: data,
    });
  };

  return (
    <Button
      title={value}
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: 'srgb(48, 47, 47)',
    borderBottomWidth: 1,
    backgroundColor: 'rgb(20, 21, 23)',
  },
  titleStyle: {
    flex: 1,
    paddingLeft: 0,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'whitesmoke',
    textAlign: 'left',
  },
});

export default Item;
