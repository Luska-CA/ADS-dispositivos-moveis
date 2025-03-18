import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

function RegistrarScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Criar Conta</Text>
      </View>
      <View style={styles.formRegister}>
        <ScrollView>
          <TextInput
            style={styles.input}
            multiline={true}
            keyboardType="default"
            placeholder="Nome Completo"
          />
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="Endereço de Email"
          />
          <TextInput style={styles.input} secureTextEntry placeholder="Senha" />
          <Button title="Registrar" color="blue" />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  appBar: {
    height: 64,
    backgroundColor: "blue",
    padding: 16,
    justifyContent: "center",
    elevation: 3,
    marginBottom: 8,
  },
  appTitle: {
    fontSize: 24,
    color: "white",
  },

  formRegister: {
    paddingHorizontal: 16,
  },

  input: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "blue",
    marginBottom: 8,
  },
});

export default RegistrarScreen;
