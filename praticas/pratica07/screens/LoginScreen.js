import { Button, Text, TextInput } from "react-native-paper";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";

function LoginScreen({ navigation }) {
  return (
    <View>
      <TextInput label="E-mail" keyboardType="email-adress" />
      <TextInput label="Senha" secureTextEntry />
      <Button
        style={{ backgroundColor: "lavender", margin: 8 }}
        onPress={() => {}}
      >
        Entrar
      </Button>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text>
          Esqueceu sua senha?
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "blue"}}> Recuperar senha</Text>
        </TouchableOpacity>
  
      </View>
    </View>
  );
}

export default LoginScreen;
