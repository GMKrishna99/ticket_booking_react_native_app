/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable eqeqeq */
/* eslint-disable quotes */

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, StatusBar, FlatList } from 'react-native';
import { COLORS, SPACING } from '../theme/theme';

import SubMovieCard from '../components/SubMovieCard';
import { searchMovies, baseImagePath } from '../api/apicalls';
import InputHeader from '../components/InputHeader';



const { width, height } = Dimensions.get('screen');
const SearchScreen = ({ navigation }: any) => {

  const [searchList, setSearchList] = useState([]);

  const searchMoviesFunction = async (name: string) => {
    try {
      let response = await fetch(searchMovies(name));
      let json = await response.json();
      setSearchList(json.results);
      console.log(json.results);
    } catch (error) {
      console.log("Something went wrong in Search movie function");
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <FlatList
        data={searchList}
        keyExtractor={(item: any) => item.id.toString()}
        bounces={false}
        numColumns={2}
        ListHeaderComponent={
          <View style={styles.InputHeaderContainer}>
            <InputHeader searchFunction={searchMoviesFunction} />
          </View>
        }
        contentContainerStyle={styles.centerContainer}
        renderItem={({ item, index }) => (
          <SubMovieCard
            shouldMarginatedAtEnd={false}
            shouldMarginatedAround={true}
            cardFunction={() => {
              navigation.push('MovieDetails', { movieid: item.id });
            }}
            cardWidth={width / 2 - SPACING.space_12 * 2}
            title={item.original_title}
            imagePath={baseImagePath('w342', item.poster_path)}
          />
        )}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width,
    alignItems: 'center',
    backgroundColor: COLORS.Black,
  },
  InputHeaderContainer: {
    display: 'flex',
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
    marginBottom: SPACING.space_28 - SPACING.space_12,
  },
  centerContainer: {
    alignItems: 'center',

  },
});
