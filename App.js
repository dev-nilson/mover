import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./src/redux/store";
import Home from "./src/views/Home";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Home />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
