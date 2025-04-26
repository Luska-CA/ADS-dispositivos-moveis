import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler"
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";

const Drawer = createDrawerNavigator();

function NavegacaoGaveta(){
    return (
        <Drawer.Navigator initialRouteName="Perfil">
            <Drawer.Screen name="Perfil" component={Perfil}/>
            <Drawer.Screen name="Home" component={Home}/>
        </Drawer.Navigator>
    );
}

export default NavegacaoGaveta;