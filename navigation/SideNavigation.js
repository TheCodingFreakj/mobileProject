import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OrderScreen from "../screens/shop/OrderScreen";
import ProductOverViewScreen from "../screens/shop/ProductsOverview";
import { View } from "react-native";

const Drawer = createDrawerNavigator();

const SideNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="ProductOverViewScreen"
        drawerContent={(props) => {
          return (
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <DrawerItem
                label="Logout"
                onPress={() => props.navigation.navigate("OrderScreen")}
              />
            </DrawerContentScrollView>
          );
        }}
        openByDefault
      >
        <Drawer.Screen
          name="Product Overview"
          component={ProductOverViewScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};



export default SideNavigation;
