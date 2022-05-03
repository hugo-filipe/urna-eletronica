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
  function btn() {
    console.log(cpf);
  }

  return (
    <View style={styles.container}>
      <>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Qual o seu numero de Cpf"
            placeholderTextColor="#003f5c"
            onChangeText={(cpf) => setCpf({cpf})}
          />
        </View>
        <Button
          style={styles.loginText}
          title="Ir para votaçao"
          onPress={btn}
        ></Button>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f3f4",
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
    flex:"Button",
    justifyContent: "center",

  },

  loginText: {
    backgroundColor: "#000000",
    color: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
