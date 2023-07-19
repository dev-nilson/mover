import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { store } from "./src/redux/store";
import Home from "./src/views/Home";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </Provider>
  );
}
