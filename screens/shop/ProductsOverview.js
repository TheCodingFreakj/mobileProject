import React from "react";
import { DrawerActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { View, FlatList, Text, Image, StyleSheet, Button } from "react-native";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native-gesture-handler";
import * as cartActions from "../../store/actions/cart";
import OrderScreen from "../shop/OrderScreen"
const ProductItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onViewDetails} useForeground>
      <View style={styles.products}>
        <Image style={styles.image} source={{ uri: props.image }} />

        <View style={styles.details}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.price}>
            <Text>$</Text>
            <Text>{props.price.toFixed(2)}</Text>
          </Text>
        </View>

        <View style={styles.actions}>
          <Button title="View Details" onPress={props.onViewDetails}>
            View Details
          </Button>

          <Button title="Add To Cart" onPress={props.onAddTocart}>
            Add To Cart
          </Button>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ProductOverViewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();
 

  return (
    
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetails={()=>{}}
          onAddTocart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
        />
      )}
      
    />

    
  );
};

const styles = StyleSheet.create({
  products: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  image: {
    width: "100%",
    height: "60%",
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "20%",
    paddingHorizontal: 10,
  },
});

export default ProductOverViewScreen;
