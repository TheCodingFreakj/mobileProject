import React from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const OrderItem = (props) => {
  const [showDetails, setshowDetails] = React.useState(false)
  let data = props.data.date.toLocaleDateString("en-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    min: "2-digit",
  });

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>Total Amount: ${props.data.totalAmount}</Text>
        <Text style={styles.text}>Date: {data}</Text>
      </View>
      {props.data.items &&
        props.data.items.map((itemData) => {
          return (
            <View style={styles.container}>
              <View style={styles.innerContainer}>
                <Text style={styles.text}>{itemData.prodTitle}</Text>
                <Text style={styles.text}>Quanity : {itemData.quantity}</Text>
              </View>

              <View style={styles.innerContainer}>
                <Text style={styles.text}>{itemData.prodPrice}</Text>
              </View>
              <View style={styles.button}>
                <Button
                  title="Show Details"
                  onPress={() => setshowDetails(!showDetails)}
                />
              </View>
            </View>
          );
        })}

      {showDetails && (
        <View>
          {props.data.items &&
            props.data.items.map((itemData) => {
              return (
                <CartItem
                  key={itemData.prodId}
                  quantity={itemData.quantity}
                  title={itemData.prodTitle}
                  amount={itemData.sum.toFixed()}
                />
              );
            })}
        </View>
      )}
    </TouchableOpacity>
  );
};
const OrderScreen = () => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <OrderItem data={itemData.item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",

    margin: 20,
  },
  innerContainer: {},
  text: {},
  button: {},
});

export default OrderScreen;
