import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  const [cpf, setCpf] = useState("");
  return (
    <View style={styles.container}>
      <>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Qual o seu numero de Cpf"
            placeholderTextColor="#003f5c"
            onChangeText={(cpf) => setCpf(setCpf)}
          />
        </View>
        <Button style={styles.loginText} title="Ir para votaçao"></Button>
      </>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f3f4",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    padding: 10,
    marginLeft: 20,
  },




  loginText: {
    backgroundColor: "#000000",
    color: "#ffffff",
    alignItems: "center",
  },
});
