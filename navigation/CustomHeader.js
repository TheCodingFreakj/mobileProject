import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigationState, useRoute } from "@react-navigation/native";

const CustomHeader = (props) => {
  let index;
  console.log(props.navigation.getState().routes[0].state);
  if (props.navigation.getState().routes[0].state === undefined) {
    return null;
  }

  if (props.navigation.getState().routes[0].state !== undefined) {
    index = props.navigation.getState().routes[0].state.index;
  }

  const getHeader2 = () => {
    return (
      <View style={styles.Container}>
        <View style={styles.InnerContainer}>
          <Text style={styles.text}>
            <Ionicons
              name="at-circle"
              size={30}
              color={"black"}
              style={{ paddingRight: -900 }}
            />
          </Text>
        </View>

        <View style={styles.InnerContainer}>
          <Text style={styles.text}>
            <Ionicons
              name="barbell"
              size={30}
              color={"black"}
              style={{ paddingRight: -900 }}
            />
          </Text>
        </View>

        <View style={styles.InnerContainer}>
          <Text style={styles.text}>
            <Ionicons
              name="bonfire"
              size={30}
              color={"black"}
              style={{ paddingRight: -900 }}
            />
          </Text>
        </View>

        <View style={styles.InnerContainer}>
          <Text style={styles.text}>
            <Ionicons
              name="basketball"
              size={30}
              color={"black"}
              style={{ paddingRight: -900 }}
            />
          </Text>
        </View>
      </View>
    );
  };

  const getHeader = () => {
    return (
      <View style={styles.Container}>
        <View style={styles.InnerContainer}>
          <Text style={styles.text}>
            <Ionicons
              name="at-circle"
              size={30}
              color={"white"}
              style={{ paddingRight: -900 }}
            />
          </Text>
        </View>

        <View style={styles.InnerContainer}>
          <Text style={styles.text}>
            <Ionicons
              name="barbell"
              size={30}
              color={"white"}
              style={{ paddingRight: -900 }}
            />
          </Text>
        </View>

        <View style={styles.InnerContainer}>
          <Text style={styles.text}>
            <Ionicons
              name="bonfire"
              size={30}
              color={"white"}
              style={{ paddingRight: -900 }}
            />
          </Text>
        </View>

        <View style={styles.InnerContainer}>
          <Text style={styles.text}>
            <Ionicons
              name="basketball"
              size={30}
              color={"white"}
              style={{ paddingRight: -900 }}
            />
          </Text>
        </View>
      </View>
    );
  };
  return <View>{index == 0 ? getHeader() : getHeader2()}</View>;
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#800080",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    color: "white",
    position: "relative",
    top: 17,
  },
});

export default CustomHeader;
