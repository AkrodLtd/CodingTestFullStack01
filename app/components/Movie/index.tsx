import React from "react";
import { Text, View, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import useColorScheme from "../../hooks/useColorScheme";
import { getGenre } from "../../utils";
import Button from "../Button";
import Title from "../Title";
import { getStyles } from "./styles";
import {
  add as addToWatchList,
  remove as removeFromWatchList,
} from "../../actions/watchlist";
import { RootState } from "../../store";

export default ({ movie }: any) => {
  const { id, title, poster_path, genre_ids } = movie;
  const dispatch = useDispatch();
  const isInWatchlist = useSelector(
    (state: RootState) => !!state.watchlist.data.find((m: any) => m.id === id)
  );
  const style = getStyles(useColorScheme());

  const addMovieToWatchlist = (movie: any) => {
    dispatch(addToWatchList(movie));
  };

  const removeMovieFromWatchlist = (movie: any) => {
    dispatch(removeFromWatchList(movie));
  };

  const getGenreList = (ids: number[]) => {
    return ids.map((id: number, index: number) => {
      const isLast: boolean = index === ids.length - 1;
      return `${getGenre(id).name}${!isLast && ", "}`;
    });
  };

  return (
    <View style={style.movie}>
      <Image
        style={style.poster}
        source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
      />
      <View style={style.infobox}>
        <Title>{title}</Title>
        <Text>{getGenreList(genre_ids)}</Text>
        {isInWatchlist ? (
          <Button
            onPress={() => removeMovieFromWatchlist(movie)}
            title="Remove from Watchlist"
            accessibilityLabel="Remove from Watchlist button"
          />
        ) : (
          <Button
            onPress={() => addMovieToWatchlist(movie)}
            title="Add to Watchlist"
            accessibilityLabel="Add to Watchlist button"
          />
        )}
      </View>
    </View>
  );
};
