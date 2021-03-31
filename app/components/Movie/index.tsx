import React from "react";
import { Text, View, Image, Button } from "react-native";
import useColorScheme from "../../hooks/useColorScheme";
import { getGenre } from "../../utils";
import Title from "../Title";
import { getStyles } from "./styles";

export default ({ id, title, poster_path, genre_ids, addMovie }: any) => {
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
          addMovie({ id, title, poster_path, genre_ids, addMovie })
        }
        title="Add to Watchlist"
        accessibilityLabel="Add to Watchlist button"
      />
      </View>
    </View>
  );
};
