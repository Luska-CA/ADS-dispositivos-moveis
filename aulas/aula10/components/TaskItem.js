import { IconButton, List } from "react-native-paper";

function TaskItem({ item }) {
  return (
    <List.Item
      title={item.descricao}
      description={item.concluida ? "Concluida" : "Pendente"}
      left={() => (
        <IconButton
          icon={item.concluida ? "check-circle" : "chech-circle"}
          onPress={() => {}}
        />
      )}
      right={() => <IconButton icon="delete" onPress={() => {}} />}
    />
  );
}

export default TaskItem;
