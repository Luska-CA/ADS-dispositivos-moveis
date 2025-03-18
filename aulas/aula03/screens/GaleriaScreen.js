import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

function GaleriaScreen() {
  const imagens = [
    "https://picsum.photos/200?random=1",
    "https://picsum.photos/200?random=2",
    "https://picsum.photos/200?random=3",
    "https://picsum.photos/200?random=4",
    "https://picsum.photos/200?random=5",
    "https://picsum.photos/200?random=6",
    "https://picsum.photos/200?random=7",
  ];
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Galeria de Imagens</Text>
      </View>
      <ScrollView contentContainerStyle={styles.grid}>
        {imagens.map((imagem, index) => (
          <View style={styles.container} key={index}>
            <Image source={{ uri: imagem }}></Image>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    appBar: {
        height: 64,
        elevation: 3,
        padding: 16,
        justifyContent: "center",
        marginBottom: 8,
        backgroundColor: "gray"
    },
    appTitle: {
        fontSize: 24,
        color: "white"
    },

    grid: {
        flexWrap: "wrap",
        flexDirection: "row",
        gap: 8,
        paddingLeft: 8
    },
    imagem: {
        height: 100,
        width: 100
    }
})

export default GaleriaScreen;
