import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

function ForgotPassword() {
    [email, setEmail] = useState("");
    [erro, setErro] = useState("");

    const validarEmail = () => {
        if (!email) {
            setErro("E-mail é obrigatório.");
        } else if (!email.includes("@")) {
          setErro("E-mail inválido.");
        } else {
          setErro("");
          alert("Instruções enviadas para o e-mail!");
        }        
        }

  return (
    <View style={{ flex: 1, padding: 8 }}>
      <TextInput
        label="E-mail"
        keyboardType="email-address"
        mode="contained"
        style={{ marginBottom: 8 }}
        value={email}
        onChangeText={setEmail}
        error={!!erro}
      />
      {erro && <Text>{erro}</Text>}
      <Button mode="contained" style={{ marginBottom: 8 }} onPress={validarEmail}>
        Enviar
      </Button>
      <TouchableOpacity>
        <Text style={{ color: "purple", alignSelf: "center" }}>
          Voltar para o Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ForgotPassword;
