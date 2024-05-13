import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Heart,
  Star,
  LayoutList,
  BetweenVerticalStart,
} from "lucide-react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import { data } from "../data";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{ padding: 10, paddingTop: 20, paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 16, color: "gray" }}>
              Escape the ordinary
            </Text>
            <Text style={{ fontSize: 36, fontWeight: "bold" }}>
              Dream Gateway
            </Text>
          </View>
          <View style={{ paddingVertical: 10, paddingLeft: 20 }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={data}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: 220,
                    height: 380,
                    marginRight: 20,
                    borderRadius: 20,
                    overflow: "hidden",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Details", { item })}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      source={{ uri: item.img }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      const index = data.findIndex((i) => i.id === item.id);
                      data[index].favorite = !data[index].favorite;
                      setIsFavorite(!isFavorite);
                    }}
                    style={{ position: "absolute", right: 10, top: 10 }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "white",
                        borderRadius: 50,
                        padding: 7,
                      }}
                    >
                      <Heart
                        color={item.favorite ? "red" : "black"}
                        fill={item.favorite ? "red" : "none"}
                        size={16}
                      />
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      position: "absolute",
                      left: 20,
                      bottom: 20,
                      rowGap: 10,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Details", { item })}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {item.travel_destination}
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {item.location}, {item.country}
                      </Text>
                    </TouchableOpacity>

                    <View
                      style={{
                        color: "white",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <View style={{ color: "white" }}>
                        <Star color={"white"} size={14} />
                      </View>
                      <Text style={{ color: "white" }}>
                        {item.rating} ({item.total_reviews})
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              paddingTop: 20,
              paddingHorizontal: 20,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 28, fontWeight: "bold" }}>
              Favorite Places
            </Text>

            <View
              style={{ flexDirection: "row", gap: 15, alignItems: "center" }}
            >
              <View>
                <BetweenVerticalStart color={"gray"} />
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  padding: 15,
                  elevation: 10,
                  borderRadius: 15,
                }}
              >
                <LayoutList color={"black"} />
              </View>
            </View>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <FlatList
              data={data.filter((item) => item.favorite === true)}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Details", { item })}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 5,
                    gap: 20,
                    backgroundColor: "white",
                    padding: 10,
                    elevation: 2,
                    borderRadius: 20,
                  }}
                >
                  <Image
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 20,
                      elevation: 5,
                      overflow: "hidden",
                    }}
                    source={{ uri: item.img }}
                  />
                  <View style={{}}>
                    <Text style={{ fontSize: 16, fontWeight: 600 }}>
                      {item.travel_destination}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        columnGap: 20,
                      }}
                    >
                      <Text style={{ color: "gray" }}>
                        {item.location}, {item.country}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
