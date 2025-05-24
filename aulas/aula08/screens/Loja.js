import { View, ActivityIndicator } from "react-native";
import { Searchbar } from "react-native-paper";
import { useState, useContext } from "react";

import { LojaContext } from "../contexts/LojaContext";
import ListaVertical from "../components/ListaVertical";

function Loja({ route }) {
  const { carregando, buscarLojas } = useContext(LojaContext);
  const { categoria } = route.params;
  const [filtro, setFiltro] = useState("");
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Searchbar
        value={filtro}
        onChangeText={setFiltro}
        onClearIconPress={() => buscarLojas(filtro)}
        placeholder={`Buscar em ${categoria}...`}
        onIconPress={() => buscarLojas("")}
      />
      {carregando ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {" "}
          <ActivityIndicator size={50} />{" "}
        </View>
      ) : (
        <>
          <ListaHorizontal />
          <ListaVertical />
        </>
      )}
      <ListaVertical />
    </View>
  );
}

export default Loja;
