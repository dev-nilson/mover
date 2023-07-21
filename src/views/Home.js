import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TextInput,
  Text,
} from "react-native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";

export default function Home() {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
        />
        <NavOptions />
      </View>
      <View style={tw`py-5`}>
        <View style={tw`p-5 my-2 flex items-center border-b border-gray-200`}>
          <Text style={tw`text-xl`}>☀️ Good morning</Text>
        </View>
        <View style={tw`p-5`}>
          <TextInput
            style={tw`py-3 px-4 m-2 font-semibold text-lg bg-gray-100`}
            placeholder="From"
          />
          <TextInput
            style={tw`py-3 px-4 m-2 font-semibold text-lg bg-gray-100`}
            placeholder="To"
          />
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
