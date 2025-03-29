import { View, StyleSheet } from "react-native";
import { Button, IconButton, Text, TextInput } from "react-native-paper";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={[styles.space, styles.textCenter]} variant="headlineLarge">
        Login
      </Text>
      <TextInput
        style={styles.space}
        mode="outlined"
        label="E-mail"
        right={<TextInput.Icon icon="email" />}
        keyboardType="email-address"
        autoCapitalize="none"
      ></TextInput>
      <TextInput
        style={styles.space}
        mode="outlined"
        label="Senha"
        right={<TextInput.Icon icon="lock" />}
        secureTextEntry
      ></TextInput>
      <Button style={styles.space} mode="contained">
        Entrar
      </Button>
      <Text style={[styles.space, styles.textCenter]} variant="labelMedium">Ou entre com:</Text>
      <View style={styles.iconButtons}>
        <IconButton icon="google" />
        <IconButton icon="facebook" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  space: {
    marginBottom: 8,
  },
  textCenter: {
    alignSelf: "center",
  },
  iconButtons: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
});

export default LoginScreen;
