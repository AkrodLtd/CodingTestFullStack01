import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, ScrollView, TextInput, ActivityIndicator } from "react-native";

import {
  get as getSearchResults,
  reset as resetSearch,
} from "../../actions/search";
import { RootState } from "../../store";

import { getStyles } from "./styles";
import useColorScheme from "../../hooks/useColorScheme";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Colors from "../../constants/Colors";
import Movie from "../../components/Movie";
// import Button from "../../components/Button";

export default function UpcomingScreen() {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search);
  const colorScheme = useColorScheme()
  const style = getStyles(colorScheme);

  const [text, onChangeText] = useState("");

  const doSearch = () => {
    dispatch(getSearchResults(text));
  };

  const resetSearchResults = () => {
    dispatch(resetSearch());
  };

  const addMovieToWatchlist = () => {};

  return (
    <View style={style.container}>
      <ScrollView>
        <View>
          <TextInput
            style={style.input}
            onChangeText={onChangeText}
            value={text}
          />
          <View style={style.buttonContainer}>
            <Button
              onPress={doSearch}
              title="Search"
              disabled={search.loading}
            />
            <Button
              onPress={resetSearchResults}
              title="Reset"
              disabled={search.loading}
            />
          </View>

          {search.loading && (
            <View style={style.loadingContainer}>
              <ActivityIndicator
                size="small"
                color={Colors[colorScheme].tint}
              />
            </View>
          )}

          {search.data.map((movie: any) => (
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
