import { Image, StyleSheet, Text, View } from "react-native";

const RevIew = ({ item }) => {
  return (
    <View
      style={{
        gap: 15,
        marginTop: 10,
      }}
    >
      {item.reviews.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              backgroundColor: "white",
              padding: 15,
              elevation: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={{ uri: item.img }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
              }}
            />
            <View style={{ width: "80%" }}>
              <Text style={{ fontSize: 16, fontWeight: 600 }}>{item.name}</Text>
              <Text style={{ color: "gray" }}>
                {item.review.length > 100
                  ? item.review.substring(0, 60) + "..."
                  : item.review}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default RevIew;

const styles = StyleSheet.create({});
