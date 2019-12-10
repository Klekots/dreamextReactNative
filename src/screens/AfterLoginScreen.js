import React from "react";
import {StyleSheet, View, TouchableOpacity, Text, Alert} from "react-native";

export const AfterLoginScreen = ({inMain, auth}) => {

  const logOut = () => {
    auth(false);
    Alert.alert("Log out");
    inMain("start");
  }

  return(
    <>
      <View style={styles.alert}>
        <Text>My profile</Text>
      </View>

      <TouchableOpacity style={[styles.btn, styles.btnBack]} onPress={()=>inMain("start")}>
        <Text style={styles.text}>Back in main screen</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.btn, styles.btnDanger]} onPress={()=>logOut()}>
        <Text style={styles.text}>Log Out</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  alert: {
    backgroundColor: "#00FF7F",
    marginVertical: 50,
    marginHorizontal: 20,
    padding: 30,
    borderRadius: 10,
    alignItems: "center"
  },
  btn: {
    padding: 20,
    marginVertical: 10,
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    color: "white"
  },
  btnBack: {
    backgroundColor: "#0033FF"
  },
  btnDanger: {
    backgroundColor: "red"
  }
})