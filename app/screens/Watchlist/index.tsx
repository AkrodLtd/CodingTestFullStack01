import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { View, ScrollView } from "react-native";

// import { get as getWatchlist } from '../../actions/watchlist';
// import { RootState } from "../../store";

import { getStyles } from "./styles";
import useColorScheme from "../../hooks/useColorScheme";
import Title from "../../components/Title";
import Button from "../../components/Button";

export default function UpcomingScreen() {
  // const dispatch = useDispatch();
  // const upcoming = useSelector((state: RootState) => state.upcoming);
  const style = getStyles(useColorScheme());

  useEffect(() => {
    // dispatch(getWatchlist());
  }, []);

  return (
    <View style={style.container}>
      <ScrollView>
        <View>
          <Title>Watchlist</Title>
        </View>
      </ScrollView>
    </View>
  );
}
