import { View, StyleSheet, FlatList } from "react-native";
import { Appbar, FAB, List } from "react-native-paper";

const contatos = [
  { id: 1, nome: "nuzi", fone: "61 9999-9999", icon: "flower" },
  { id: 2, nome: "zé", fone: "61 8888-8888", icon: "account" },
  { id: 3, nome: "Pai", fone: "61 7777-7777", icon: "puzzle" },
];

function ContactScreen() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Contatos" />
          <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
        <FlatList
          data={contatos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <List.Item
              left={(props) => <List.Icon {...props} icon={item.icon} />}
              title={item.nome}
              description={item.fone}
            />
          )}
        />
        <View style={styles.fab}>
          <FAB icon="plus" />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
      },
      fab: {
          flexDirection: "row",
          position: 'absolute',
          right: 16,
          bottom: 16
      }
  });
  

export default ContactScreen;
