import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, ScrollView, TextInput, ActivityIndicator } from "react-native";

import { RootState } from "../../store";

import { getStyles } from "./styles";
import useColorScheme from "../../hooks/useColorScheme";
import Button from "../../components/Button";
import Colors from "../../constants/Colors";
import Movie from "../../components/Movie";

export default function () {
  const dispatch = useDispatch();
  const watchlist = useSelector((state: RootState) => state.watchlist);
  const colorScheme = useColorScheme();
  const style = getStyles(colorScheme);

  const removeMovieFromWatchlist = () => {};
  return (
    <View style={style.container}>
      <ScrollView>
        <View>
          {watchlist.loading && (
            <View style={style.loadingContainer}>
              <ActivityIndicator
                size="small"
                color={Colors[colorScheme].tint}
              />
            </View>
          )}

          {watchlist.data.map((movie: any) => (
            <Movie
              addMovie={removeMovieFromWatchlist}
              removeMovie={removeMovieFromWatchlist}
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
