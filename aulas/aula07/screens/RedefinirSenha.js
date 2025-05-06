import { useState } from "react";
import { View } from "react-native";
import { Button, TextInput, HelperText } from "react-native-paper";

function RedefinirSenha() {
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  const validaEmail = () => {
    if (!email) {
        setErro("Email é obrigatório!");
        return false;
      }
  
      if (!email.includes("@")) {
        setErro("Email inválido!");
        return false;
      }

      return true;
  }

  const trataTexto = (text) => {
    setEmail(text);
    validaEmail();
  }

  const tratarEnviar = () => {
    if(!validaEmail()) {
        return;
    }
    setEmail("");
    setErro("");
    alert("E-mail enviado!");
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        keyboardType="email-address"
        label={"Email"}
        value={email}
        onChange={validaEmail}
        onChangeText={setEmail}
        mode="outlined"
        style={{ margin: 16 }}
        error={erro != ""}
      />
      <HelperText type="error" visible={erro}>
        {erro}
      </HelperText>
      <Button mode="contained" onPress={tratarEnviar}>
        Enviar
      </Button>
    </View>
  );
}

export default RedefinirSenha;
