import { StyleSheet, Text } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { View } from "../../components/Themed";
import Input from "../../components/primitives/Input";
import { useState } from "react";
import { CssColors } from "../../constants/Colors";

export default function TabTwoScreen() {
  const [keyWord, setKeyWord] = useState<string>("");
  const [result, setResult] = useState<any[]>([]);

  return (
    <View style={styles.container}>
      <Input label="Поиск..." onChangeText={setKeyWord} />
      <View style={styles.results}>
        {!keyWord ? (
          <View style={styles.notFound}>
            <Text style={styles.notFoundText}>
              Введите что-нибудь для поиска
            </Text>
          </View>
        ) : keyWord && !result.length ? (
          <View style={styles.notFound}>
            <Text style={styles.notFoundText}>Ничего не найдено</Text>
          </View>
        ) : (
          ""
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  results: {
    width: "100%",
  },
  notFound: {
    height: 500,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundText: {
    color: CssColors.white,
    fontSize: 17,
  },
});
