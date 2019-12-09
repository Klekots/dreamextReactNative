import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

import {ProductsScreen} from './src/screens/ProductsScreen';
import {AfterLoginScreen} from './src/screens/AfterLoginScreen';

import {ModalAuth} from './src/components/ModalAuth';

export default function App() {

  const [activeScreen, setActiveScreen] = useState("start");
  const [vis, setVis] = useState(false);
  const [authStatus, setAuthStatus] = useState(false);

  switch(activeScreen){
    case "start" : return (
      <View style={styles.container}>

        <View style={styles.greetingWrap}>
          <Text style={styles.greetingText}>Hello, check products or log in</Text>
        </View>


        <View style={styles.navbar}>

          <View style={styles.btnWrap}>
            <TouchableHighlight style={styles.btn} onPress={()=>setActiveScreen("products")}>
              <Text style={styles.text}>Products</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.btnWrap}>
            <TouchableHighlight style={styles.btn} onPress={()=>{
              if(authStatus === true){
                setVis(false);
                setActiveScreen("inSystem");
              } else {
                setVis(true);
              }
            }}>
              <Text style={styles.text}>Log In</Text>
            </TouchableHighlight>
          </View>

          <View>
            <ModalAuth auth={setAuthStatus} setVisible={setVis} visible={vis} />
          </View>
          
        </View>
      </View>
    );
    break;
    case "products": return (
      <ProductsScreen inMain={setActiveScreen}/>
    )
    break;
    case "inSystem" : return (
      <AfterLoginScreen inMain={setActiveScreen} />
    )
    default : return (<Text>Empty Screen</Text>);
    break;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9999CC',
    justifyContent: 'flex-end'
  },
  greetingWrap: {
    alignSelf: 'center',
    marginBottom: '60%',
    backgroundColor: 'silver',
    borderRadius: 10
  },
  greetingText: {
    fontSize: 22,
    padding: 10
  },
  navbar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnWrap: {
    width: '45%',
    margin: '2.5%'
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#0033FF',
    paddingVertical: 20,
    borderRadius: 5
  },
  text: {
    fontSize: 21,
    color: 'white'
  }
});
