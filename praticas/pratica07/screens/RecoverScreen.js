import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";



function RecoverScreen({ navigation }) {
    return (
        <View>
            <TextInput label="E-mail" keyboardType="email-addres"/>
            <Button onPress={() => {}} style={{backgroundColor: "lavender", margin: 8}}>
                Recuperar Senha
            </Button>
            <View style={{flexDirection: "row",justifyContent: "center"}}>
                <Text style={{color: "blue"}}>Voltar para o login</Text>
            </View>
        </View>
    )
}

export default RecoverScreen;