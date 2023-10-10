/* eslint-disable eqeqeq */


/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Touchable, TouchableOpacity, Dimensions, ScrollView, StatusBar, ActivityIndicator, FlatList } from 'react-native';
import { COLORS, SPACING } from '../theme/theme';

import { upcomingMovies, nowPlayingMovies, popularMovies, baseImagePath } from '../api/apicalls';

import InputHeader from '../components/InputHeader';
import CategoryHeader from '../components/CategoryHeader';
import SubMovieCard from '../components/SubMovieCard';
import MovieCard from '../components/MovieCard';

const { width, height } = Dimensions.get('window');

const getNowPlayingMoviesList = async () => {
  try {
    let response = await fetch(nowPlayingMovies);
    let json = await response.json();
    return json;

  } catch (error) {
    console.error('something went  in getNowPlayingMoviesList function');
  }
};

const getUpcomingMoviesList = async () => {
  try {
    let response = await fetch(upcomingMovies);
    let json = await response.json();
    return json;

  } catch (error) {
    console.error('something went  in getUpcomingMoviesMoviesList function');
  }
};

const getPopularMoviesList = async () => {
  try {
    let response = await fetch(popularMovies);
    let json = await response.json();
    return json;

  } catch (error) {
    console.error('something went  in getPopularMoviesMoviesList function');
  }
};



const HomeScreen = ({ navigation }: any) => {
  // getting api data from database
  const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState<any>(undefined);
  const [popularMoviesList, setPopularMoviesList] = useState<any>(undefined);
  const [upcomingMoviesList, setUpcomingMoviesList] = useState<any>(undefined);
  useEffect(() => {
    (async () => {
      let tempNowPlaying = await getNowPlayingMoviesList();
      setNowPlayingMoviesList(tempNowPlaying.results);

      let tempUpcoming = await getUpcomingMoviesList();
      setUpcomingMoviesList(tempUpcoming.results);

      let tempPopular = await getPopularMoviesList();
      setPopularMoviesList(tempPopular.results);
    })();
  }, []);

  const searchMoviesFunction = () => {
    navigation.navigate('Search');
  };

  if (
    nowPlayingMoviesList === undefined &&
    nowPlayingMoviesList == null &&
    popularMoviesList === undefined &&
    popularMoviesList == null &&
    upcomingMoviesList === undefined &&
    upcomingMoviesList == null) {
    return (
      <ScrollView style={styles.container} bounces={false} contentContainerStyle={styles.scrollViewContainer} >
        <StatusBar hidden />
        <View style={styles.InputHeaderContainer}>
          <InputHeader searchFunction={searchMoviesFunction} />
        </View>
        <View style={styles.loadingContainer} >
          <ActivityIndicator size="large" color={COLORS.Orange} />
        </View>
      </ScrollView>
    );
  }
  return (
    <ScrollView style={styles.container} bounces={false} >
      <StatusBar hidden />
      <View style={styles.InputHeaderContainer}>
        <InputHeader searchFunction={searchMoviesFunction} />
      </View>
      <CategoryHeader title={'Now Playing'} />
      <FlatList
        data={nowPlayingMoviesList}
        keyExtractor={(item: any) => item.id.toString()}
        horizontal
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => (
          // movie_card
          <MovieCard
            shouldMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push('MovieDetails', { movieid: item.id });
            }}
            cardWidth={width * 0.7}
            isFirst={index == 0 ? true : false}
            isLast={index == upcomingMoviesList?.length - 1 ? true : false}
            title={item.original_title}
            imagePath={baseImagePath('w780', item.poster_path)}
            genre={item.genre_ids.slice(1, 4)}
            vote_average={item.vote_average}
            vote_count={item.vote_count}
          />
          // movie_card
        )}
      />
      <CategoryHeader title={'Popular'} />
      <FlatList
        data={popularMoviesList}
        keyExtractor={(item: any) => item.id.toString()}
        horizontal
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => (
          <SubMovieCard
            shouldMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push('MovieDetails', { movieid: item.id });
            }}
            cardWidth={width / 3}
            isFirst={index == 0 ? true : false}
            isLast={index == upcomingMoviesList?.length - 1 ? true : false}
            title={item.original_title}
            imagePath={baseImagePath('w342', item.poster_path)}
          />
        )}
      />
      <CategoryHeader title={'Upcoming'} />
      <FlatList
        data={upcomingMoviesList}
        keyExtractor={(item: any) => item.id}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => (
          <SubMovieCard
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push('MovieDetails', { movieid: item.id });
            }}
            cardWidth={width / 3}
            isFirst={index == 0 ? true : false}
            isLast={index == upcomingMoviesList?.length - 1 ? true : false}
            title={item.original_title}
            imagePath={baseImagePath('w342', item.poster_path)}
          />
        )}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.Black,
  },
  scrollViewContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  InputHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
  },
  containerGap36: {
    gap: SPACING.space_36,
  },
});
