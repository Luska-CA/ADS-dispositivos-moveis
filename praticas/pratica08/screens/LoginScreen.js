import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";

function LoginScreen() {
  const {
    control,
    handleSUbmit,
    formState: { error },
  } = useForm();
  const onSubmit = (data) => {
    alert("Login realizado com sucesso!");
  };

  return (
    <View style={{ flex: 1, padding: 8 }}>
      <Controller control={control} name="email" rules={{required: "E-mail é obrigatorio"}} render={{field: {onChange, value}}}>
        <TextInput
          label="E-mail"
          keyboardType="email-address"
          mode="contained"
          style={{ marginVertical: 16, borderRadius: 8 }}
        />
        </Controller>
      <TextInput
        label="Senha"
        secureTextEntry
        mode="contained"
        style={{ marginBottom: 16, borderRadius: 8 }}
      />
      <Button mode="contained">Entrar</Button>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text>Esqueceu sua senha? </Text>
        <TouchableOpacity>
          <Text style={{ color: "purple" }}>Recuperar senha</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={{ color: "purple", alignSelf: "center" }}>
          Criar Conta
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;
