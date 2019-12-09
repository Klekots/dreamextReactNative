import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

export const AfterLoginScreen = props => {

  return(
    <View>

      <View style={styles.alert}>
        <Text>You are in system</Text>
      </View>

      <View style={styles.btn}>
        <Button title="Back in main screen" onPress={()=>props.inMain("start")}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  alert: {
    backgroundColor: '#00FF7F',
    marginVertical: 100,
    marginHorizontal: 20,
    padding: 30,
    borderRadius: 10,
    alignItems: 'center'
  },
  btn: {
    alignItems: 'center'
  }
})