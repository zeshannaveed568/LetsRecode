import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import RevIew from "./RevIew";
import Gallery from "./Gallery";

const duration = 1800;

const HorizontalTabs = ({ item }) => {
  const [selected, setSelected] = useState(0);

  return (
    <View style={{ paddingHorizontal: 40 }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 70,
          marginBottom: 20,
          gap: 40,
        }}
      >
        {["Place Description", "Gallery", "Reviews"].map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => setSelected(index)}
              key={index}
              style={{
                justifyContent: "center",
                alignItems: "center",
                rowGap: 5,
              }}
            >
              <Text
                style={
                  selected === index
                    ? {
                        fontSize: 16,
                        fontWeight: 700,
                        color: "orange",
                      }
                    : {
                        fontSize: 16,
                        fontWeight: 700,
                        color: selected === index ? "black" : "gray",
                      }
                }
              >
                {item}
              </Text>
              <View
                style={
                  selected === index
                    ? {
                        backgroundColor: "orange",
                        width: 10,
                        height: 10,
                        borderRadius: 50,
                      }
                    : {
                        backgroundColor: "gray",
                        width: 10,
                        height: 10,
                        borderRadius: 50,
                        opacity: 0,
                      }
                }
              ></View>
            </TouchableOpacity>
          );
        })}
      </View>

      {selected === 0 ? (
        <View style={{ rowGap: 10, marginBottom: 10 }}>
          <Text style={{ fontSize: 24, fontWeight: 700 }}>Description</Text>
          <Text style={{ color: "gray", fontSize: 16 }}>
            {item.description}
          </Text>
        </View>
      ) : selected === 1 ? (
        <View style={{ rowGap: 10, marginBottom: 10 }}>
          <Text style={{ fontSize: 24, fontWeight: 700 }}>Gallery</Text>
          <Gallery item={item} />
        </View>
      ) : (
        <View style={{ rowGap: 10, marginBottom: 10 }}>
          <Text style={{ fontSize: 24, fontWeight: 700 }}>Reviews</Text>
          <RevIew item={item} />
        </View>
      )}
    </View>
  );
};

export default HorizontalTabs;

const styles = StyleSheet.create({});
