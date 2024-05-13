import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Menu } from "lucide-react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { profile } from "../data";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 50,
          elevation: 5,
        }}
      >
        <Menu color={"black"} size={28} />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile", { profile });
        }}
        style={{
          backgroundColor: "white",
          elevation: 5,
          padding: 2,
          borderRadius: 50,
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            objectFit: "cover",
          }}
          source={{
            uri: profile[0].img,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
