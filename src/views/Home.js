import { StyleSheet, SafeAreaView, View, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";

export default function Home() {
  const navigation = useNavigation();

  const handlePress = (screen) => {
    navigation.navigate(screen);
    console.log("PRESS");
  };

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`pt-5 pb-0 px-5`}>
        <Image
          style={{ width: 75, height: 75, resizeMode: "contain" }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
        />
      </View>
      <View>
        <View style={tw`px-5`}>
          <TextInput
            style={tw`py-3 px-4 m-2 font-semibold text-lg bg-gray-100`}
            placeholder="From"
          />
          <TextInput
            style={tw`py-3 px-4 m-2 font-semibold text-lg bg-gray-100`}
            placeholder="To"
          />
        </View>
        <View style={tw`px-5 mt-5`}>
          <NavOptions handlePress={handlePress} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
