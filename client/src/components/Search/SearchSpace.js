import React from 'react';
import { StyleSheet, ActivityIndicator, View, Text } from 'react-native';
import SearchKeywords from '../../container/SearchKeywords';
import { AntDesign } from 'react-native-vector-icons';

const SearchKeywordTitle = () => {
  return (
    <Text style={styles.searchText}>
      <AntDesign name='bells' size={17} /> 추천 검색 키워드
    </Text>
  );
};

const SearchResultTitle = ({ searchResult }) => {
  return (
    <Text style={styles.searchText}>
      <AntDesign name='search1' size={17} /> 검색 결과 {searchResult.length} 건
    </Text>
  );
};

const SearchSpace = ({ navigation, searching, searchResult }) => {
  return (
    <View style={styles.container}>
      {searchResult !== 'Not Found' ? (
        <View>
          {searching ? (
            <SearchResultTitle searchResult={searchResult} />
          ) : (
            <SearchKeywordTitle />
          )}
          <SearchKeywords navigation={navigation} />
        </View>
      ) : (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size={40} color='red' />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(20, 21, 23)',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 25,
  },
  searchResultWrap: {
    flex: 1,
    backgroundColor: 'rgb(20, 21, 23)',
  },
  searchResult: {
    marginTop: 2,
    marginLeft: 7,
    marginBottom: 10,
    marginRight: 1,
  },
  searchText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchSpace;
