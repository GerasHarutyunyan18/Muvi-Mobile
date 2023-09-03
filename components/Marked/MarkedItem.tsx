import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  Image,
} from "react-native";
import { View } from "../Themed";
import { Category, Film } from "../../constants/Types";
import { SvgUri } from "react-native-svg";
import { CssColors } from "../../constants/Colors";
import Button from "../primitives/Button";

interface MarkedFilmItemProps {
  film: Film;
}

const MarkedItem = ({ film }: MarkedFilmItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.topLeftButtonContainer}>
        <Button
          style={{ backgroundColor: CssColors.red }}
          imageUrl="https://www.svgrepo.com/show/422402/cancel-close-delete.svg"
        />
      </View>
      <Image
        style={styles.image}
        src="https://gidonline.io/img/a65288bdf_120x170.jpg"
        source={{ uri: "https://gidonline.io/img/a65288bdf_120x170.jpg" }}
      />
      <View style={styles.filmInfo}>
        <Text style={styles.filmName}>{film.name}</Text>
        <Text style={styles.year}>2022 год</Text>
        <View style={styles.categories}>
          {film.category.map((cat: Category, index: number) => (
            <Text key={index} style={styles.category}>
              {cat.name} {index !== film.category.length - 1 && ","}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    flexDirection: "row",
  },
  topLeftButtonContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 1,
    borderRadius: 5,
  },
  image: {
    height: 170,
    width: 120,
    resizeMode: "cover",
  },
  filmInfo: {
    padding: 10,
  },
  filmName: {
    fontSize: 20,
    color: CssColors.white,
  },
  year: {
    color: CssColors.gold,
    fontStyle: "italic",
    fontSize: 17,
    fontWeight: "800",
  },
  categories: {
    width: 200,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  category: {
    color: CssColors.grey,
    fontStyle: "italic",
  },
});

export default MarkedItem;
