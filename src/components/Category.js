import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export const Category = props => {
  return (
    <TouchableHighlight style={styles.category} onPress={()=>props.scrollToItem(props.category)}>
      <View>
        <Text style={styles.text}>{props.category}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  category: {
    borderRadius: 10,
    backgroundColor: '#66CDAA',
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 5,
  },
  text: {
    color: 'white',
    fontSize: 18,
    padding: 10
  }
})