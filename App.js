import React, {useState} from "react";
import {StyleSheet, Text, View, TouchableHighlight} from "react-native";

import {ProductsScreen} from "./src/screens/ProductsScreen";
import {AfterLoginScreen} from "./src/screens/AfterLoginScreen";
import {ModalAuth} from "./src/components/ModalAuth";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("start");
  const [vis, setVis] = useState(false);
  const [authStatus, setAuthStatus] = useState(false);

  switch(activeScreen){
    case "start" : return (
      <View style={styles.container}>
        <Text style={styles.greetingText}>Hello, check products or log in</Text>
        <View style={styles.navbar}>  
          <TouchableHighlight style={styles.tab} onPress={()=>setActiveScreen("products")}>
            <Text style={styles.text}>Products</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.tab} onPress={()=>{
            if(authStatus === true){
              setVis(false);
              setActiveScreen("inSystem");
            } else {
              setVis(true);
            }
          }}>
          <Text style={styles.text}>{authStatus ? "My profile" : "Log in"}</Text>
          </TouchableHighlight>
        </View>
        <ModalAuth auth={setAuthStatus} setVisible={setVis} visible={vis} />
      </View>
    );
    break;
    case "products": return (
      <ProductsScreen inMain={setActiveScreen}/>
    )
    break;
    case "inSystem" : return (
      <AfterLoginScreen inMain={setActiveScreen} auth={setAuthStatus}/>
    )
    default : return (<Text>Empty Screen</Text>);
    break;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9999CC",
    justifyContent: "flex-end"
  },
  greetingText: {
    fontSize: 22,
    padding: 10,
    fontWeight: "bold",
    color: "white",
    marginBottom: "60%"
  },
  navbar: {
    flexDirection: "row"
  },
  tab: {
    alignItems: "center",
    backgroundColor: "#0033FF",
    paddingVertical: 20,
    width: "50%"
  },
  text: {
    fontSize: 21,
    color: "white",
    fontWeight: "bold"
  }
});