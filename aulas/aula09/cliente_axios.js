import axios from "axios";

const url = "http://localhost:3000/tarefas";

// obter todas as tarefas - GET /
axios
  .get(url)
  .then((response) => console.log(response.data))
  .catch((error) => console.log("DEU RUIM MENO", error.message));

  // criar tarefa - POST /
  axios.post(url, {nome: "Dormir", concluida: false})
