import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { Icon } from "@rneui/themed";
import tw from "twrnc";

const data = [
  {
    id: 0,
    title: "Get started",
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png",
    screen: "Map",
  },
];

export default function NavOptions({ handlePress }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`px-4 pb-8 pt-4 bg-gray-100 m-2`}
          onPress={() => handlePress(item.screen)}
        >
          <View>
            <Image
              style={{ width: 125, height: 125, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold text-center`}>
              {item.title}
            </Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              type="antdesign"
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
