import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const contatos = [
  {
    id: 1,
    nome: "Ana Souza",
    telefone: "(11) 9999-9999",
    img: "https://picsum.photos/200/300?random=1",
  },

  {
    id: 2,
    nome: "Carlos Lima",
    telefone: "(21) 9888-9888",
    img: "https://picsum.photos/200/300?random=2",
  },

  {
    id: 3,
    nome: "Mariana Santos",
    telefone: "(31) 9777-9777",
    img: "https://picsum.photos/200/300?random=3",
  },
];

function ContactScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Contatos</Text>
      </View>
      <ScrollView>
        {contatos.map((contato) => (
          <TouchableOpacity key={contato.id} style={styles.item} onPress={() => {}}>
            <Image style={styles.itemAvatar} source={{ uri: contato.img }} />
            <View>
              <Text style={styles.itemName}>{contato.nome}</Text>
              <Text style={styles.itemPhone}>{contato.telefone}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={() => {}} style={styles.fablcon}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFE",
  },
  appBar: {
    backgroundColor: "#6750A4",
    height: 72,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "center",
    marginBottom: 8,
    paddingTop: 16,
  },
  appTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "400",
    lineHeight: 28,
    alignSelf: "center",
  },
  item: {
    flexDirection: "row",
    aligntItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 8,
    height: 56,
  },
  itemAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1C1B1F",
  },
  itemPhone: {
    fontSize: 14,
    color: "#49454F",
  },
  fablcon: {
    color: "#1C1B1F",
    fontSize: 24,
    fontWeight: "400",
  },
});

export default ContactScreen;
