import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useSelector, useDispatch } from "react-redux";
import * as cartActions from "../../store/actions/cart";
const ProductDetails = ({ route, ...props }) => {
  const { productId } = route.params;

  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prodId) => prodId.id === productId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.action}>
        <Button
          color={Colors.primary}
          title="Add To Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        >
          Add To Cart
        </Button>
      </View>

      <Text style={styles.title}>{selectedProduct.title}</Text>
      <Text style={styles.price}>{selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.desc}>{selectedProduct.desc}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  action: {
    marginVertical: 10,
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  desc: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
  },
});

export default ProductDetails;
