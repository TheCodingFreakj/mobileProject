import React from "react";
import {
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Image,
  Button,
  Text,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import * as productActions from "../../store/actions/product";
const EditProductsScreen = (props) => {
  const idSelected = props.route.params.prodID;
  const editedProd = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === idSelected)
  );

  const [title, settitle] = React.useState(editedProd ? editedProd.title : "");
  const [image, setimage] = React.useState(editedProd ? editedProd.image : "");
  const [price, setprice] = React.useState(editedProd ? editedProd.price : "");
  const [desc, setdesc] = React.useState(editedProd ? editedProd.desc : "");

  return (
    <ScrollView>
      <View style={styles.outercontainer}>
        <View style={styles.container}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => settitle(text)}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>Image</Text>
          <TextInput
            style={styles.input}
            value={image}
            onChangeText={(text) => setimage(text)}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.input}
            value={price.toString()}
            onChangeText={(text) => setprice(text)}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>Desc</Text>
          <TextInput
            style={styles.input}
            value={desc}
            onChangeText={(text) => setdesc(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outercontainer: {
    margin: 20,
  },
  container: {
    width: "100%",
  },
  label: {
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default EditProductsScreen;
