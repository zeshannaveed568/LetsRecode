import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Gallery = ({ item }) => {
  return (
    <View
      style={{
        flexWrap: "wrap",
        flexDirection: "row",
        gap: 15,
      }}
    >
      {item.gallery.map((item, index) => {
        return (
          <Image
            key={index}
            source={{ uri: item }}
            style={{
              width: "30%",
              height: 100,
              borderRadius: 10,
              marginBottom: 10,
            }}
          />
        );
      })}
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({});
