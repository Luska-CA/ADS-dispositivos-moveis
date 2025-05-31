fetch('http://localhost:3000/contatos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));

  fetch('http://localhost:3000/contatos/1a2b')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));
