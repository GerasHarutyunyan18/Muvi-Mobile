import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

const SwiperCarousel = ({ options }: any) => {
  return (
    <Swiper
      style={styles.wrapper}
      showsPagination={false}
      showsHorizontalScrollIndicator={true}
    >
      {options.map((option: any, index: number) => (
        <View key={index} style={styles.slide}>
          <Text style={styles.text}>{option.label}</Text>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eaeaea",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SwiperCarousel;
