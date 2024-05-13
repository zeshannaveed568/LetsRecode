import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MapPin, Star, Compass, CalendarDays } from "lucide-react-native";
import HorizontalTabs from "../components/HorizontalTabs";
import PagesHeader from "../components/PagesHeader";

const DetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.detailsContainer}>
      <StatusBar hidden={true} />

      <PagesHeader item={item} title={"Detail"} color={"white"} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ zIndex: 10 }}>
          <View
            style={{
              overflow: "hidden",
              borderBottomLeftRadius: 35,
              borderBottomRightRadius: 35,
            }}
          >
            <ImageBackground
              source={{ uri: item.img }}
              style={{
                height: 500,
                width: "100%",
              }}
            />
          </View>

          <View
            style={{
              position: "absolute",
              bottom: "-10%",
              width: "80%",
              alignSelf: "center",
              height: 100,
              borderRadius: 20,
              backgroundColor: "white",
              elevation: 10,
              zIndex: 100,
            }}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                rowGap: 15,
              }}
            >
              <View
                style={{
                  width: "80%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "black", fontSize: 24, fontWeight: 700 }}>
                  {item.travel_destination}
                </Text>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <MapPin color={"red"} size={20} />
                  <Text style={{ color: "gray", fontSize: 16 }}>
                    {item.location}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "80%",
                }}
              >
                <View
                  style={{ flexDirection: "row", gap: 7, alignItems: "center" }}
                >
                  <CalendarDays color='gray' size={18} />
                  <Text style={{ color: "gray", fontSize: 16 }}>02 Day</Text>
                </View>
                <View
                  style={{ flexDirection: "row", gap: 7, alignItems: "center" }}
                >
                  <Compass color='gray' size={18} />
                  <Text style={{ color: "gray", fontSize: 16 }}>
                    28 KM North
                  </Text>
                </View>
                <View
                  style={{ flexDirection: "row", gap: 7, alignItems: "center" }}
                >
                  <Star color='gray' size={18} />
                  <Text style={{ color: "gray", fontSize: 16 }}>
                    {item.rating}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <HorizontalTabs item={item} />
      </ScrollView>
      <View
        style={{
          positiona: "absolute",
          bottom: 0,
          width: "100%",
          paddingVertical: 20,
          paddingHorizontal: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ rowGap: 5 }}>
            <Text style={{ color: "gray" }}>Total Cost:</Text>
            <Text style={{ fontSize: 24, fontWeight: 700 }}>
              {item.cost.currency} {item.cost.amount}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "orange",
              paddingHorizontal: 25,
              paddingVertical: 15,
              borderRadius: 30,
              elevation: 10,
            }}
          >
            <Text style={{ fontSize: 18, color: "white", fontWeight: 600 }}>
              Book Now
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    backgroundColor: "white",
  },
});
