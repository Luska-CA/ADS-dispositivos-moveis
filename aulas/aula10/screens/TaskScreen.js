import { useState, useContext, useEffect } from "react";
import { TaskContext } from "../contexts/TaskContext"
import { View, FlatList } from "react-native";
import { Modal, FAB, Appbar } from "react-native-paper";
import TaskItem from "../components/TaskItem";
import TaskModal from "../components/TaskModal";

function TaskScreen() {
  const { tarefas, carregarTarefas } = useContext(TaskContext);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const carrega = async() => {
      await carregarTarefas();
    }
    carrega()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Minhas Tarefas" />
      </Appbar.Header>
      <View style={{ flex: 1, paddingBottom: 24 }}>
        <FlatList
          data={tarefas}
          keyExtractor={(item) => item.id}
          renderItem={{ TaskItem }}
        />
      </View>
      <FAB
        style={{ position: "absolute", right: 16, bottom: 16 }}
        icon="plus"
        onPress={() => setShowModal(true)}
      />
      <Modal visible={showModal} transparent>
        <TaskModal setShowModal={setShowModal} />
      </Modal>
    </View>
  );
}

export default TaskScreen;
