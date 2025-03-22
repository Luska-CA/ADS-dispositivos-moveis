import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const mensagens = [
  {
    id: 1,
    avatar: "http://picsum.photos/200?random=1",
    nome: "Mãe",
    msg: "Cade tu?",
    horario: "21/03/2025 21:37",
  },
  {
    id: 2,
    avatar: "http://picsum.photos/200?random=2",
    nome: "Zé",
    msg: "vai se FODER mlk",
    horario: "23/03/2025 17:02",
  },
  {
    id: 3,
    avatar: "http://picsum.photos/200?random=3",
    nome: "mô",
    msg: "reagiu a sua mensagem: beijos <3",
    horario: "23/03/2025 23:43",
  },
];

function ConversasScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Conversas</Text>
      </View>
      <View>
        <FlatList
          data={mensagens}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            <TouchableOpacity>
              <View style={styles.item}>
                <Image
                  style={styles.photo}
                  source={{ uri: item.avatar }}
                ></Image>
                <View style={{ flex: 1 }}>
                  <View style={styles.chat}>
                    <Text style={styles.contactName}>{item.nome}</Text>
                    <Text style={styles.contactHour}>{item.horario}</Text>
                  </View>
                  <Text style={styles.contactMsg}>{item.msg}</Text>
                </View>
              </View>
            </TouchableOpacity>;
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 64,
    backgroundColor: "darkgreen",
    padding: 16,
    justifyContent: "center",
    elevation: 3,
    marginBottom: 8,
  },
  appTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
  item: {
    padding: 16,
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  photo: {
    width: 48,
    height: 48,
    borderRadius: 48,
    marginRight: 16,
  },
  chat: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: "600",
    color: "darkgreen",
  },
  contactHour: {
    fontSize: 12,
    color: "gray",
  },
  contactMsg: {
    color: "black",
  },
});

export default ConversasScreen;
