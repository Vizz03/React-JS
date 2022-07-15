import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React from "react";
import * as constants from '../Constants'

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput placeholder="Username" style={styles.input}/>
      <TextInput placeholder="Password" style={styles.input} secureTextEntry/>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
      <Pressable style={{marginTop: 30}}>
        <Text style={styles.text}>Forgot Password? </Text>
      </Pressable>
      <Pressable style={{marginTop: 30, backgroundColor: constants.Secondary, padding: 20, width: '90%'}}>
        <Text style={styles.text}>Create Account </Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: constants.Tenary
  },

  input:{
    borderWidth: 1,
    borderColor: constants.White,
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding : 20,
    width: '90%',
    color: constants.White
  },

  button:{
    marginTop: 15,
    backgroundColor: constants.Primary,
    padding: 20,
    width: "90%"
  },

  text:{
    alignSelf: 'center',
    justifyContent: 'center',
    color: constants.White,
    fontSize: 20
  }

});
