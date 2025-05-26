import { SafeAreaProvider } from "react-native-safe-area-context";
import StoreProvider from "./contexts/StoreContext"
import MainNavigator from "../../aulas/aula08/routes/MainNavigator";

function App() {
  return (
    <SafeAreaProvider>
      <StoreProvider>
        <MainNavigator/>
      </StoreProvider>
    </SafeAreaProvider>
  );
}

export default App;
