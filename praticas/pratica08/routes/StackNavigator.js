import { createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import ForgotPassword from '../screens/ForgotPasswordScreen'
import SignUpScreen from '../screens/SignUpScreen'

function StackNavigator () {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="RecuperarSenha" component={ForgotPassword}/>
            <Stack.Screen name="CriarConta" component={SignUpScreen}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;