import React from "react";
import { Text, View, StyleSheet, FlatList, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import * as cartActions from "../../store/actions/cart";
import * as orderActions from "../../store/actions/order";
const CartScreen = (props) => {
  const dispatch = useDispatch();
  const [tranformedItems] = React.useState([]);
  const cartTotal = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => state.cart.items);
  const [reload, setreload] = React.useState(false);
  const [dispatchedItems, setdispatchedItems] = React.useState();

  //storing cart items inside an object
  //getting the state from redux
  //creating an array of objects from objects inside an object
  for (let key in cartItems) {
    if (cartItems[key].prodId === undefined) {
      tranformedItems.push({
        prodId: key,
        prodTitle: cartItems[key].prodTitle,
        prodPrice: cartItems[key].prodPrice,
        sum: cartItems[key].sum,
        quantity: cartItems[key].quantity,
      });
    }
  }

  //filtering unique object in this useeffect
  //runs and filters anytime transformed objects changes
  React.useEffect(() => {
    const uniqueValuesSet = new Set();

    const uniqueArray = tranformedItems.filter((obj) => {
      // check if name property value is already in the set
      const isPresentInSet = uniqueValuesSet.has(obj.prodId);

      // add name property value to Set
      uniqueValuesSet.add(obj.prodId);

      // return the negated value of
      // isPresentInSet variable
      return !isPresentInSet;
    });

    setdispatchedItems(uniqueArray);
  }, [tranformedItems]);

  //removing item
  //dispatching action to get all the cartitems from store
  //filtering unique value
  //setting the state
  let uniqueArraySide;
  const handleRemove = (item) => {
    setreload(!reload);
    dispatch(cartActions.removeFromCart(item.prodId));

    //optimized code for handing quantity counts
    const result = dispatch(cartActions.getAllCartItems(dispatchedItems));
    uniqueArraySide =
      Object.values(result.payload) &&
      Object.values(result.payload).filter((data) => {
        if (data.quantity === 1) {
          if (data.prodId !== item.prodId) {
            return data;
          }
        } else {
          if (data.prodId === item.prodId) {
            data.quantity = data.quantity - 1;
            data.sum = data.sum - data.prodPrice;
          }

          return data;
        }
      });
    setdispatchedItems(uniqueArraySide);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summmayText}>
          Total:
          <Text style={styles.amont}>${parseFloat(cartTotal.toFixed(2))}</Text>
        </Text>

        <Button
          title="Order Now"
          disabled={tranformedItems.length === 0}
          onPress={() => {
            dispatch(orderActions.addOrder(dispatchedItems, cartTotal));
          }}
        />
      </View>

      <FlatList
        data={dispatchedItems}
        keyExtractor={(item) => item.prodId}
        renderItem={(itemData) => (
          <CartItem
            deletable
            quantity={itemData.item.quantity}
            title={itemData.item.prodTitle}
            amount={itemData.item.sum.toFixed()}
            onRemove={() => handleRemove(itemData.item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
    height: "100%",
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summmayText: {
    fontSize: 18,
  },
  amont: {
    color: "red",
  },
});

export default CartScreen;
