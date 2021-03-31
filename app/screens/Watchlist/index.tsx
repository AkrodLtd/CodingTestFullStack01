import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, ScrollView, TextInput, ActivityIndicator } from "react-native";

import { RootState } from "../../store";
import { getStyles } from "./styles";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";
import Movie from "../../components/Movie";

export default function () {
  const dispatch = useDispatch();
  const watchlist = useSelector((state: RootState) => state.watchlist);

  const colorScheme = useColorScheme();
  const style = getStyles(colorScheme);


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
              key={movie.id}
              movie={movie}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
