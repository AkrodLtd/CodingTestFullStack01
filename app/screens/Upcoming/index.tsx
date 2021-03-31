import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, View, Image, ScrollView } from "react-native";

import { get as getUpcomingMovies } from "../../actions/upcoming";
import { add as addToWatchList } from "../../actions/watchlist";
import { RootState } from "../../store";

import { getStyles } from "./styles";
import useColorScheme from "../../hooks/useColorScheme";
import Movie from "../../components/Movie";

export default function () {
  const dispatch = useDispatch();
  const upcoming = useSelector((state: RootState) => state.upcoming);
  const userID = useSelector((state: RootState) => state.user.id);
  const style = getStyles(useColorScheme());

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, []);

  const addMovieToWatchlist = (movie: any) => {
    dispatch(addToWatchList(movie, userID));
  };

  if (upcoming.data === null) return false;

  if (upcoming.loading) {
    // TODO: build a custom Loading screen
    return (
      <View style={style.container}>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.movieGroup}>
          {upcoming.data.results.map((movie: any) => (
            <Movie
              addMovie={addMovieToWatchlist}
              key={movie.id}
              movie={movie}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
