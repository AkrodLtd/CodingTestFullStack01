import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import { RootState } from "../../store";
import { getStyles } from "./styles";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";
import Movie from "../../components/Movie";
import { get as getWatchlist } from "../../actions/watchlist";

export default function () {
  const dispatch = useDispatch();
  const watchlist = useSelector((state: RootState) => state.watchlist);
  const [isRefreshing, setRefreshing] = useState(false);

  const colorScheme = useColorScheme();
  const style = getStyles(colorScheme);

  useEffect(() => {
    dispatch(getWatchlist());
  }, []);

  const handleRefresh = useCallback(() => {
    // TODO: improve promise logic
    setRefreshing(true);
    dispatch(getWatchlist());
    setRefreshing(false);
  }, []);

  return (
    <View style={style.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      >
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
            <Movie key={movie.id} movie={movie} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
