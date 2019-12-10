import React from "react";
import {View, Text, StyleSheet, TouchableHighlight} from "react-native";

export const Category = ({category, scrollToItem}) => {
  return (
    <TouchableHighlight style={styles.category} onPress={()=>scrollToItem(category)}>
      <View>
        <Text style={styles.text}>{category}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  category: {
    borderRadius: 10,
    backgroundColor: "#66CDAA",
    marginHorizontal: 15,
    marginVertical: 10
  },
  text: {
    color: "white",
    fontSize: 20,
    padding: 10,
    fontWeight: "bold"
  }
})