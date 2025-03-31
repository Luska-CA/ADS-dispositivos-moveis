import { StyleSheet, View, ScrollView } from "react-native";
import { Avatar, Card, Button, List, Text } from "react-native-paper";

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card>
          <Card.Content>
            <Avatar.Image
              size={100}
              source={{ uri: "https://picsum.photos/200" }}
              style={styles.avatar}
            />
            <Text variant="titleLarge">João Silva</Text>
            <Text variant="bodyMedium">joao.silva@example.com</Text>
            <Text variant="bodyMedium">(11) 9999-9999</Text>
          </Card.Content>
          <Card>
            <Button style={styles.button} mode="contained">Editar Perfil</Button>
            <List.Section>
              <List.Subheader style={styles.sectionTitle}>Configurações da Conta</List.Subheader>
              <List.Item
                title="Privacidade"
                left={() => <List.Icon icon="lock" />}
                onPress={() => {}}
              />
              <List.Item
                title="Notificações"
                left={() => <List.Icon icon="bell" />}
                onPress={() => {}}
              />
            </List.Section>
          </Card>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 24 },
  avatar: {alignSelf: "center", marginBottom: 16},
  profileSection: {flexGrow: 1, padding: 16},
  button: {marginTop: 16},
  sectionTitle: {fontSize: 16, fontWeight: "bold"},
});

export default ProfileScreen;
