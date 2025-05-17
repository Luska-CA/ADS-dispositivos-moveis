import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";


function SignUpScreen () {
    return (
        <View style={{flex: 1, padding: 8}}>
            <TextInput label="Nome" mode="contained" style={{marginBottom: 16}}/>
            <TextInput label="E-mail" mode="contained" keyboardType="email-address" style={{marginBottom: 16}}/>
            <TextInput label="Senha" mode="contained" secureTextEntry style={{marginBottom: 16}}/>
            <TextInput label="Confirme a Senha" mode="contained" secureTextEntry style={{marginBottom: 16}}/>
            <Button mode="contained" style={{marginBottom: 8}}>
                Criar
            </Button>
            <TouchableOpacity>
                <Text style={{color: 'purple', alignSelf: "center"}}>Voltar para o Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignUpScreen;