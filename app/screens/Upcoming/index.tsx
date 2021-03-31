import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, View, Image, ScrollView } from "react-native";

import { get as getUpcomingMovies } from "../../actions/upcoming";
// import { add as addToWatchList } from '../../actions/watchlist';
import { getGenre } from "../../utils";
import { RootState } from "../../store";

import { getStyles } from "./styles";
import useColorScheme from "../../hooks/useColorScheme";
import Title from "../../components/Title";
import Button from "../../components/Button";

export default function UpcomingScreen() {
  const dispatch = useDispatch();
  const upcoming = useSelector((state: RootState) => state.upcoming);
  const style = getStyles(useColorScheme());

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, []);

  const addMovieToWatchlist = (data: any) => {
    // TODO: Add to watchlist
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
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              genre_ids={movie.genre_ids}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// TODO: Move this to it own file as a shared component?
const Movie = ({ id, title, poster_path, genre_ids, addMovie }: any) => {
  const style = getStyles(useColorScheme());
  return (
    <View style={style.movie}>
      <Image
        style={style.poster}
        source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
      />
      <View style={style.infobox}>
      <Title>{title}</Title>
      <Text>
        Genres: {genre_ids.map((id: number) => `${getGenre(id).name} ,`)}
      </Text>
      <Button
        onPress={() =>
          addMovie({
            user: 1,
            id,
            title,
            poster_path,
            genre_ids,
          })
        }
        title="Add to Watchlist"
        accessibilityLabel="Add to Watchlist button"
      />
      </View>
    </View>
  );
};
