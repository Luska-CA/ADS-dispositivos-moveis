import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

function ProdutoScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Detalhes do Produto</Text>
      </View>
      <View>
        <View style={styles.container}>
          <Image
            style={styles.photo}
            source={{ uri: "https://picsum.photos/200/300" }}
          ></Image>
          <Text style={styles.productName}>Nome do Produto</Text>
          <Text style={styles.productDetail}>Caracteristicas do produto</Text>

          <View style={styles.sectionButtons}>
            <TouchableOpacity>
              <View style={styles.buttonQtd}>
                <Text style={styles.textQty}>-</Text>
              </View>
            </TouchableOpacity>
            <View style={(style = { marginRight: 16 })}>
              <Text style={styles.textQty}>1</Text>
            </View>
            <TouchableOpacity>
              <View style={styles.buttonQtd}>
                <Text style={styles.textQty}>+</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.price}>R$99,99</Text>
          </View>
        </View>
        <View style={styles.buttonAdd}>
          <Text style={styles.textAdd}>Adicionar ao Carrinho</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    padding: 16,
  },
  photo: {
    borderRadius: 8,
    height: 200,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 8,
  },
  productDetail: {
    fontSize: 12,
    color: "gray",
    marginBottom: 8,
  },
  sectionQtyPrc: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonQtd: {
    height: 32,
    width: 32,
    borderRadius: 8,
    backgroundColor: "lightblue",
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textQty: {
    fontSize: 24,
    fontWeight: "600",
  },
  price: {
    fontSize: 24,
    color: "blue",
  },
  buttonAdd: {
    borderWidth: 1,
    backgroundColor: "blue",
    borderRadius: 24,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textAdd: {
    fontSize: 16,
    fontWeight: "600",
    color: "blue",
  },
});

export default ProdutoScreen;
