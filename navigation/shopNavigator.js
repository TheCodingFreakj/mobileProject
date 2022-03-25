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
const Home = () => {
  return (
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
      <Stack.Screen name="Product Overiew" component={ProductOverViewScreen} />
      <Stack.Screen name="Product Details" component={ProductDetails} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen
        name="User Products"
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
      <Stack.Screen
        name="EditProducts"
        component={EditProductsScreen}
        options={({ navigation, route }) => ({
          // header: ({ navigation, route, options, back }) => {
          //   const title = getHeaderTitle(options, route.name);

          //   return <Button title={title} onPress={navigation.goBack} />;
          // },

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
  );
};

const Main = () => {
  return (
    <Tab.Navigator
      activeColor="#e91e63"
      barStyle={{ backgroundColor: "black" }}
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
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: "CartScreen",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{
          tabBarLabel: "OrderScreen",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigation = (props) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
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
          name="Main"
          component={Main}
          options={{ headerShown: false }}
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
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  CartContainer: {
    color: "white",
  },
});

export default AppNavigation;
//https://stackoverflow.com/questions/55942600/how-to-get-previous-route-name-from-react-navigation
//https://reactnavigation.org/docs/stack-navigator/#header-related-options

//https://reactnavigation.org/docs/nesting-navigators/
//https://www.jscamp.app/docs/react-navigation/reactnative06/
