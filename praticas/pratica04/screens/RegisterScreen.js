import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";

function RegisterScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Criar Conta</Text>
      </View>
      <TextInput placeholder="Nome" style={styles.input}/>
      <TextInput placeholder="E-mail" keyboardType="email-address" style={styles.input} />
      <TextInput placeholder="Senha" secureTextEntry  style={styles.input}/>
      <View style={styles.buttonContainer}>
        <Button title="Registrar" color="#6750A4" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFBFE" },
  appBar: {
    backgroundColor: "#6750A4",
    height: 80,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  appTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "400",
    lineHeight: 28,
    alignSelf: "center",
    paddingTop: 16
  },
  input: {
    backgroundColor: "#E6E0E9",
    height: 56,
    paddingHorizontal: 16,
    margin: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#79747E",
    fontSize: 16,
    color: "#1C1B1F",
  },
  buttonContainer: { marginTop: 24, marginHorizontal: 8 },

});

export default RegisterScreen;
