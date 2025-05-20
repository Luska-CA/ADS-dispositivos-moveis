import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categorias from "../screens/Categorias";
import Loja from "../screens/Loja";

const Stack = createNativeStackNavigator();

function BuscaNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categorias" component={Categorias} />
      <Stack.Screen name="Loja" component={Loja} />
    </Stack.Navigator>
  );
}

export default BuscaNavigator;