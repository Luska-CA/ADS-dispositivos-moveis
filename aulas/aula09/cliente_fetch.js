const url = "http://localhost:3000/tarefas";

// obter tarefas - requisição GET/
await fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Nuh uh", error.message));

// obter uma tarefa - GET /id
await fetch(`${url}/1a2b`)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Nuh uh", error.message));

// adicionar uma tarefa - POST /
await fetch(url, {
  method: "POST",
  body: JSON.stringify({ nome: "Praticar React 100x", concluida: true }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Nuh uh", error.message));

// alterar uma tarefa = PUT /id
await fetch(`${url}/bc46`, {
  method: "PUT",
  body: JSON.stringify({ nome: "TRALALERO TRALALA", concluida: false }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Nuh uh", error.message));

// alterar uma tarefa = PATCH /id
await fetch(`${url}/bc46`, {
  method: "PATCH",
  body: JSON.stringify({ concluida: false }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Nuh uh", error.message));

// obter uma tarefa - DELETE /id
await fetch(`${url}/1a2b`, { method: "DELETE" })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Nuh uh", error.message));
