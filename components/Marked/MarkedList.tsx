import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  ScrollView,
} from "react-native";
import { View } from "../Themed";
import { Film } from "../../constants/Types";
import MarkedItem from "./MarkedItem";

const movieData = {
  category: [
    { name: "мультфильм", id: 4 },
    { name: "мультфильм", id: 3 },
    { name: "мультфильм", id: 3 },
  ],
  countries: [{ country: "США", id: 2 }],
  createdAt: "2023-08-12T15:28:58.547615Z",
  createdDate: 2,
  actors: [],
  created_date_string: "2008",
  description:
    'Фантастическо-сатирический мультфильм «Футурама: Игра Бендера» продолжает рассказывать о веселых и необычных приключениях паренька Фрая и его друзей из компании по доставке грузов "Межгалактический экспресс", принадлежащей профессору Хьюберту Фарнсворту. после значительного подорожания цен на топливо, профессор запретил использовать космическим кораблем в личных целях. Однако этот запрет не остановил Лилу, которая использовала корабль в нерабочее время, чтобы принять участие на конкурсе космических кораблей. Чтобы раздобыть универсальное топливо, которое вырабатывается из темной материи, профессор и команда межгалактического экспресса отправляется в опасное путешествие. Но по нелепой ошибке команда попадает в необычный и странный мир, в котором царит магия, существуют драконы и разнообразные мифические существа. Правда, рыцари очень похожи на Бендера, и это наводит на определенные размышления о странности мира, в котором героям предстоит пережить множество невероятных приключений.',
  director: null,
  director_name: null,
  duration: "1 час 27 мин",
  englishName: "Futurama: Bender's Game",
  id: 1235,
  image: null,
  image_url: "https://gidonline.io/img/a65288bdf_120x170.jpg",
  name: "Футурама: Игра Бендера",
  videoUrl: "https://voidboost.net/embed/376447",
};

const MarkedList = () => {
  const [films, setFilms] = useState<Film[]>([
    movieData,
    movieData,
    movieData,
    movieData,
  ]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {films.map((film) => (
          <View style={styles.item}>
            <MarkedItem film={film} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 200,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 20,
  },
  item: {
    width: "100%",
  },
});

export default MarkedList;
