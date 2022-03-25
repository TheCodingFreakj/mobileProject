import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HeaderButtonCom = (props) => {
  const productsIncart = useSelector((state) => state.cart.items);

  const length = Object.keys(productsIncart).length || 0;

  return (
    <>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.CartContainer}>
          <Text style={styles.CartNumber}>{length}</Text>

          <Ionicons
            name="md-cart"
            size={43}
            color={"black"}
            style={{ paddingRight: -900 }}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  CartNumber: {
    color: "white",
    fontSize: 20,
    position: "absolute",
    zIndex: 99,
    marginLeft: 20,
  },
  CartContainer: {
    color: "white",
    position: "relative",
  },
});
export default HeaderButtonCom;
