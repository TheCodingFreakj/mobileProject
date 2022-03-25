import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CartItem = (props) => {
  return (
    <View style={styles.CartItem}>
      <Text style={styles.Itemdata}>
        <Text style={styles.quantity}>{props.quantity}</Text>
        <Text style={styles.title}>{props.title}</Text>
      </Text>

      <View style={styles.CartItem}>
        <Text style={styles.amount}>{props.amount}</Text>

        {props.deletable && (
          <TouchableOpacity onPress={props.onRemove} style={styles.deleteIcon}>
            <Ionicons name="md-trash" size={23} color="red" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  Itemdata: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    color: "#888",
    fontSize: 16,
  },
  title: {
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
  },
  deleteIcon: {
    marginLeft: 20,
  },
});

export default CartItem;
