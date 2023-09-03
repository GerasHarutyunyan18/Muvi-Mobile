import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { CssColors } from "../constants/Colors";

const CarouselComponent = ({ options }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={options}
        renderItem={renderItem}
        sliderWidth={400}
        sliderHeight={50}
        itemWidth={250} // Adjust the width of individual items
        onSnapToItem={(index: any) => setActiveIndex(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
  },
  itemContainer: {
    backgroundColor: CssColors.purple,
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
  },
  itemLabel: {
    fontSize: 18,
    color: CssColors.white,
    fontWeight: "bold",
  },
  paginationContainer: {
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: "purple",
  },
  paginationInactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: "gray",
  },
});

export default CarouselComponent;
