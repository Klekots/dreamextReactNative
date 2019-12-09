import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Modal, Alert, TouchableOpacity} from 'react-native';

import {getData} from '../../server/server';

export const ModalAuth = props =>{

  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [btnStatus, setBtnStatus] = useState(false);

  useEffect(()=>{
    if(loginValue.length > 3 && passwordValue.length > 4){
      setBtnStatus(true)
    } else {
      setBtnStatus(false)
    }
  },[loginValue, passwordValue]);

  const authorization = () =>{
    getData({login: loginValue, password: passwordValue}).then((res)=>{
      if(res.authorize === "ok"){
        props.auth(true);
        Alert.alert("Successful login");
        props.setVisible(false);
      } else {
        Alert.alert("The username or password is incorrect, try again!");
        setLoginValue("");
        setPasswordValue("");
      }
    });
  }

  return(
    <Modal visible={props.visible} animationType='slide' transparent={false}>
      <View style={styles.modalWrap}>
        <View>
          <TextInput
            style={styles.loginInput}
            placeholder='Enter login'
            placeholderTextColor={'white'}
            autoCapitalize='none'
            autoCorrect={false}
            maxLength={16}
            value={loginValue}
            onChangeText={text => setLoginValue(text)}
          />
        </View>
        
        <View>
          <TextInput
            style={styles.passwordInput} 
            placeholder='Enter password'
            placeholderTextColor={'white'}
            autoCapitalize='none'
            autoCorrect={false}
            maxLength={16}
            secureTextEntry={true}
            value={passwordValue}
            onChangeText={text => setPasswordValue(text)}
          />
        </View>

        <View>
          <TouchableOpacity style={styles.confirm,{display: btnStatus ? "flex": "none"}} onPress={()=>authorization()}>
            <Text style={styles.confirmText}>Authorization</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.cancel}>
          <Button title='Back to main screen' onPress={()=>props.setVisible(false)}/>
        </View>
      </View>
    </Modal>

  )
}

const styles = StyleSheet.create({
  modalWrap: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFCC66'
  },
  loginInput: {
    padding: 10,
    margin: 10,
    borderWidth: 4,
    borderColor: 'red',
    borderRadius: 10,
    fontSize: 16
  },
  passwordInput: {
    padding: 10,
    margin: 10,
    borderWidth: 4,
    borderColor: 'green',
    borderRadius: 10,
    fontSize: 16
  },
  confirmText: {
    fontSize: 20,
    padding: 10,
    margin: 10,
    textAlign: 'center',
    backgroundColor: 'green',
    borderRadius: 10
  },
  cancel: {
    margin: 10,
    padding: 10
  }
})