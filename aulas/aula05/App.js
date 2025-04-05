import { SafeAreaProvider } 
from "react-native-safe-area-context";
import TaskScreen from "./screens/TaskScreen";

function App() {
  return (
    <SafeAreaProvider>
      <TaskProvider>
        <TaskScreen />
      </TaskProvider>
    </SafeAreaProvider>    
  );
}