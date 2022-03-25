import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import AppNavigation from "./navigation/shopNavigator";
import CustomNavigation from "./navigation/customShopNavigator"
import { store } from "./store/store";
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        {/* <AppNavigation /> */}
        <CustomNavigation/>
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
