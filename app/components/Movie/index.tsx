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
        {addMovie && (
          <Button
            onPress={() => addMovie(movie)}
            title="Add to Watchlist"
            accessibilityLabel="Add to Watchlist button"
          />
        )}
        {removeMovie && (
          <Button
            onPress={() => removeMovie(movie)}
            title="Remove from Watchlist"
            accessibilityLabel="Remove from Watchlist button"
          />
        )}
      </View>
    </View>
  );
};
