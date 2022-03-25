import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SideDrawer = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.CartContainer}>
          <Ionicons
            name="md-menu"
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
  CartContainer: {
    color: "white",
  },
});
export default SideDrawer;
