import React from "react";
import { Text, View, Image } from "react-native";
import useColorScheme from "../../hooks/useColorScheme";
import { getGenre } from "../../utils";
import Button from "../Button";
import Title from "../Title";
import { getStyles } from "./styles";

export default ({ movie, addMovie, removeMovie }: any) => {
  const { title, poster_path, genre_ids } = movie;
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
        {addMovie && <Button
          onPress={() =>
            addMovie(movie)
          }
          title="Add to Watchlist"
          accessibilityLabel="Add to Watchlist button"
        />}
        {removeMovie && <Button
          onPress={() =>
            removeMovie(movie)
          }
          title="Remove from Watchlist"
          accessibilityLabel="Remove from Watchlist button"
        />}
      </View>
    </View>
  );
};
