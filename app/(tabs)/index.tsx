import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import CarouselComponent from "../../components/Carousel";
import Button from "../../components/primitives/Button";
import { CssColors } from "../../constants/Colors";
import FilmList from "../../components/films/FilmList";

const options = [
  { label: "Комедия" },
  { label: "Музыка" },
  { label: "Сериалы" },
];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.categoires}>
        <CarouselComponent options={options} />
        <Button
          style={{
            backgroundColor: CssColors.gold,
            alignItems: "center",
            width: 200,
            alignSelf: "center",
          }}
          title="Сделать фильтр"
        />
      </View>
      <FilmList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  categoires: {
    gap: 8,
    marginBottom: 20,
  },
});
