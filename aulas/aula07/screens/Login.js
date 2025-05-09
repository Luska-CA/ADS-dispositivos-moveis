import { View } from "react-native";
import { TextInput, HelperText, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";

function Login() {
  const { control } = useForm();
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Controller
        control={control}
        name="email"
        render={({ field: {value, onChange} }) => (
          <TextInput
            label="E-mail"
            mode="outlined"
            keyboardType="email-adress"
            autoCapitalize="none"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <HelperText type="error" visible={false}></HelperText>
      <Controller
        control={control}
        name="senha"
        render={({ field: {value, onChange} }) => (
          <TextInput
            label="Senha"
            mode="outlined"
            secureTextEntry
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <HelperText type="error" visible={false}></HelperText>
      <Button mode="contained" onPress={() => {}} style={{ marginBottom: 16 }}>
        Entrar
      </Button>
      <Button mode="outlined" onPress={() => {}} style={{ marginBottom: 16 }}>
        Criar Conta
      </Button>
      <Button mode="outlined" onPress={() => {}}>
        Redefinir Senha
      </Button>
    </View>
  );
}

export default Login;
