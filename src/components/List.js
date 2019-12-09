import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export const List = ({id , category, product, price, description}) => {
  

  return (
  <>
    <TouchableOpacity onPress={()=>console.log(category)}>
      <View style={styles.wrap}>

          <View style={styles.imageBlock}>
            <View>
              <Image
                style={{width: 70, height: 70}}
                source={{uri:`https://res.cloudinary.com/klekots/image/upload/v1575818764/Dreamext/${id}.jpg`}}
              />
            </View>
          </View>
          
          <View style={styles.infoBlock}>
            <View>
              <Text>{category}</Text>
            </View>
            <View>
              <Text>{product}</Text>
            </View>
            <View>
              <Text>{price}</Text>
            </View>
            <View>
              <Text>{description}</Text>
            </View>
          </View>

      </View>
    </TouchableOpacity>
  </>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    borderWidth: 4,
    borderColor: 'silver'
  },
  imageBlock: {
    flex:1
  },
  infoBlock: {
    flex:1
  }

});