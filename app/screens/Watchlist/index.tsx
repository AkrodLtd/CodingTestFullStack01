import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, ScrollView, TextInput, ActivityIndicator } from "react-native";

import { RootState } from "../../store";
import { remove as removeFromWatchList } from "../../actions/watchlist";
import { getStyles } from "./styles";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";
import Movie from "../../components/Movie";

export default function () {
  const dispatch = useDispatch();
  const watchlist = useSelector((state: RootState) => state.watchlist);
  const userID = useSelector((state: RootState) => state.user.id);
  const colorScheme = useColorScheme();
  const style = getStyles(colorScheme);

  const removeMovieFromWatchlist = (movie: any) => {
    // console.log(movie);
    dispatch(removeFromWatchList(movie, userID));
  };
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
              removeMovie={removeMovieFromWatchlist}
              key={movie.id}
              movie={movie}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
