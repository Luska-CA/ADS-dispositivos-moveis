import { View, FlatList } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { LojaContext} from "../contexts/LojaContext";

function Grid() {
  const navigation = useNavigation();
  const { categorias } = useContext(LojaContext);

  return (
    <View>
      <FlatList
        data={categorias}
        numColumns={2}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <View style={{ flex: 1,width: "48%", padding: 8, marginBottom: 8, marginRight: 8 }}>
            <Button mode="contained" icon={item.icon} onPress={() => navigation.navigate("Loja", { categoria: item.nome })}>{item.nome}</Button>
          </View>
        )}
      />
    </View>
  );
}

export default Grid;
