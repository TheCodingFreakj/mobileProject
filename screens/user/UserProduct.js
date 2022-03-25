import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, FlatList, View, Image, Button, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import * as productActions from "../../store/actions/product";
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
          <Button title="Delete" onPress={props.delete}>
            Delete
          </Button>

          <Button title="Edit" onPress={props.edit}>
            Edit
          </Button>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const UserProductsScreen = (props) => {
  const products = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          title={itemData.item.title}
          image={itemData.item.imageUrl}
          price={itemData.item.price}
          delete={() => {
            dispatch(productActions.deleteproduct(itemData.item.id));
          }}
          edit={() => {
            props.navigation.navigate("EditProducts", {
              prodID: itemData.item.id,
            });
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

export default UserProductsScreen;
