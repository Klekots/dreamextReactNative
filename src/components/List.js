import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";

export const List = ({id , category, product, price, description}) => {
  return (
    <TouchableOpacity>
      <View style={styles.wrap}>
        
        <View style={styles.block}>
          <Image
            style={styles.image}
            source={{uri:`https://res.cloudinary.com/klekots/image/upload/v1575818764/Dreamext/${id}.jpg`}}
          />
        </View>

        <View style={styles.block}>
          <Text>{category}</Text>
          <Text>{product}</Text>
          <Text>{price}</Text>
          <Text>{description}</Text>
        </View>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    borderWidth: 4,
    borderColor: "silver"
  },
  block: {
    flex: 1
  },
  image: {
    width: 70,
    height: 70
  }
});