import { View } from "react-native"
import Grid from "../components/Grid";
import { useNavigation } from "@react-navigation/native";

function Categorias() {
    return (
        <View style={{flex: 1, padding: 16}}>
            <Grid/>
        </View>
    )
}

export default Categorias;