import { StyleSheet, Text, View } from "react-native";

function ProfileScreen() {
  return (
    <View>
      <View>
        <View />
        <View>
          <Text>João da Silva</Text>
          <Text>Desenvolvedor React Native</Text>
        </View>
      </View>
      <Text>Habilidades</Text>
      <View>
        <View>
          <Text>React Native</Text>
        </View>
        <View>
          <Text>JavaScript</Text>
        </View>
        <View>
          <Text>CSS</Text>
        </View>
      </View>
    </View>
  );
}

export default ProfileScreen;
