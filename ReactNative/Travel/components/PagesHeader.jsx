import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GripVertical, ChevronLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const PagesHeader = ({ item, title, color }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        position: "absolute",
        top: 40,
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: 40,
        zIndex: 100,
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 10,
            borderRadius: 10,
            elevation: 10,
          }}
        >
          <ChevronLeft color={"white"} onPress={() => navigation.goBack()} />
        </TouchableOpacity>
        <Text
          style={
            title === "Detail"
              ? { color: "white", fontSize: 24, fontWeight: 700 }
              : title === "Profile"
              ? { color: "white", fontSize: 24, fontWeight: 700 }
              : title === "Login"
              ? { color: "black", fontSize: 24, fontWeight: 700 }
              : title === "SignUp"
              ? { color: "black", fontSize: 24, fontWeight: 700 }
              : { color: "black", fontSize: 24, fontWeight: 700 }
          }
        >
          {title === "Detail"
            ? item.travel_destination
            : title === "Profile"
            ? "Profile"
            : title === "Login"
            ? "Login"
            : title === "SignUp"
            ? "SignUp"
            : ""}
        </Text>
        <GripVertical color={color} />
      </View>
    </View>
  );
};

export default PagesHeader;

const styles = StyleSheet.create({});
