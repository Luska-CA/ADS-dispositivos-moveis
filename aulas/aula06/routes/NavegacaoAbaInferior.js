import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";

const Tab = createBottomTabNavigator();

function NavegacaoAbaInferior(){
    return (
        <Tab.Navigator initialRouteName="Perfil">
            <Tab.Screen name="Perfil" component={Perfil}/>
            <Tab.Screen name="Home" component={Home}/>
        </Tab.Navigator>
    );
}

export default NavegacaoAbaInferior;