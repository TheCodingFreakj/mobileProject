import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getHeaderTitle } from "@react-navigation/elements";
import { connect } from "react-redux";
import { StyleSheet, View, TouchableOpacity, Button } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import ProductOverViewScreen from "../screens/shop/ProductsOverview";
import ProductDetails from "../screens/shop/ProductDetails";
import EditProductsScreen from "../screens/user/EditProducts";
import colors from "../constants/colors";
import HeaderButtonCom from "../UI/HeaderButton";
import CartScreen from "../screens/shop/cartScreen";
import CustomHeader from "./CustomHeader";
import OrderScreen from "../screens/shop/OrderScreen";
import UserProductsScreen from "../screens/user/UserProduct";
import {
  createDrawerNavigator,
  HeaderBackButton,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      activeColor="#e91e63"
      barStyle={{ backgroundColor: "black" }}
      screenOptions={({ navigation, route }) => ({})}
    >
      <Tab.Screen
        name="Product Overview"
        component={ProductOverViewScreen}
        options={({ navigation, route }) => {
          return {
            tabBarLabel: "All Products",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
            header: (props) => {
              return <CustomHeader {...props} />;
            },
            headerStyle: {
              backgroundColor: "transparent",
            },
          };
        }}
      />
      <Tab.Screen
        name="Your Products"
        component={UserProductsScreen}
        options={({ navigation, route }) => {
          return {
            tabBarLabel: "Your Products",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
            header: (props) => {
              return <CustomHeader {...props} />;
            },
            headerStyle: {
              backgroundColor: "transparent",
            },
          };
        }}
      />
    </Tab.Navigator>
  );
};

const MainSideDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },

        // headerTitle:"This is Header Title"
      })}
      // initialRouteName="ProductOverViewScreen"
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabsNavigator}
        options={({ navigation, route }) => {
          return {
            header: (props) => {
              return <CustomHeader {...props} />;
            },
            headerStyle: {
              backgroundColor: "transparent",
            },
          };
        }}
      />
      <Drawer.Screen
        name="Product OverView"
        component={ProductOverViewScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <HeaderButtonCom
              onPress={() => {
                navigation.navigate("CartScreen");
              }}
            />
          ),
        })}
      />
      <Drawer.Screen
        name="Admin"
        component={UserProductsScreen}
        options={({ navigation, route }) => ({
          headerTitle: "Your Products",
          headerRight: () => {
            if (route.params === undefined) {
              return (
                <TouchableOpacity onPress={() => {}}>
                  <View style={styles.CartContainer}>
                    <Ionicons
                      name="md-add"
                      size={43}
                      color={"black"}
                      style={{ paddingRight: -900 }}
                    />
                  </View>
                </TouchableOpacity>
              );
            }
          },
        })}
      />
    </Drawer.Navigator>
  );
};

const CustomNavigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },

          headerRight: () => (
            <HeaderButtonCom
              onPress={() => {
                navigation.navigate("CartScreen");
              }}
            />
          ),
        })}
      >
        <Stack.Screen
          name="MainSideDrawer"
          component={MainSideDrawer}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Product Overiew"
          component={ProductOverViewScreen}
        />
        <Stack.Screen name="Product Details" component={ProductDetails} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen
          name="EditProducts"
          component={EditProductsScreen}
          options={({ navigation, route }) => ({
            headerRight: () => {
              if (route.params !== undefined) {
                return (
                  <TouchableOpacity>
                    <View style={styles.CartContainer}>
                      <Ionicons
                        name="md-analytics"
                        size={43}
                        color={"black"}
                        style={{ paddingRight: -900 }}
                      />
                    </View>
                  </TouchableOpacity>
                );
              }
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  CartContainer: {
    color: "white",
  },
});

export default CustomNavigation;
