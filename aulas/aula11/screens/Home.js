import { useContext } from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { AuthContext } from "../contexts/AuthContext";

function Home() {
  const { usuario, logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, padding: 16, justifyContent: "space-around" }}>
      <Text style={{ padding: 16 }} variant="titleLarge">
        Olá, {usuario.login}!
      </Text>
      <Button mode="contained" onPress={() => logout()}>
        Sair
      </Button>
    </View>
  );
}

export default Home;
