import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  Image,
} from "react-native";
import { View } from "../Themed";
import { Film } from "../../constants/Types";
import { SvgUri } from "react-native-svg";
import { CssColors } from "../../constants/Colors";
import Button from "../primitives/Button";

interface FilmItemProps {
  film: Film;
}

const FilmItem = ({ film }: FilmItemProps) => {
  const [a, setA] = useState<boolean>(false);

  const listToggler = () => {
    setA(!a);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.topLeftButtonContainer, a && styles.inList]}>
        <Button
          style={{ backgroundColor: CssColors.purple }}
          onPress={listToggler}
          imageUrl="https://www.svgrepo.com/show/422427/ecommerce-interface-label.svg"
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
  },
  topLeftButtonContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
    opacity: 0.6,
    borderRadius: 5,
  },
  image: {
    height: 300,
    width: "100%",
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
  inList: {
    opacity: 1,
  },
});

export default FilmItem;
