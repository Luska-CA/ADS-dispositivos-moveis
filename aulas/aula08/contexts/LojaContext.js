import { createContext, useState } from "react";

const categoriasDB = [
  { id: 1, nome: "Restaurantes", icone: "food" },
  { id: 2, nome: "Bares", icone: "beer" },
  { id: 3, nome: "Lanchonetes", icone: "hamburger" },
  { id: 4, nome: "Pizzarias", icone: "pizza" },
  { id: 5, nome: "Sorveteria", icone: "ice-cream" },
  { id: 6, nome: "Cafeterias", icone: "coffe" },
  { id: 7, nome: "Padarias", icone: "bread-slice" },
  { id: 8, nome: "Mercados", icone: "shopping" },
];

const lojasDB = [
  { id: 1, nota: "1,1", nome: "Restaurante Asa Sul" },
  { id: 1, nota: "3,2", nome: "Restaurante Asa Norte" },
  { id: 1, nota: "5,2", nome: "Restaurante Tague" },
  { id: 1, nota: "5,6", nome: "Bar Ceilandia" },
  { id: 1, nota: "2,6", nome: "Bar Sudoeste" },
  { id: 1, nota: "6,9", nome: "Lanchonete Gama" },
  { id: 1, nota: "7,8", nome: "Pizzaria Nucleo" },
];

const LojaContext = createContext();

function LojaProvider({ children }) {
  const [categorias, setCategorias] = useState([]);
  const [lojas, setLojas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const carregarDados = () => {
    setCarregando(true);
    setTimeout(() => {
      setLojas(lojasDB);
      setCategorias(categoriasDB);
      setCarregando(false);
    }, 2000);
  };

  const buscarLojas = (filtro) => {
    setCarregando(true);
    setTimeout(() => {
      const lojasEncontradas = lojasDB.filter((loja) =>
        loja.nome.toLowerCase().includes(filtro.toLowerCase())
      );
      setLojas(lojasEncontradas);
      setCarregando(false);
    }, 2000);
  };

  return (
    <LojaContext.Provider
      value={{ lojas, categorias, carregando, carregarDados, buscarLojas }}
    >
      {children}
    </LojaContext.Provider>
  );
}

const useLojaContext = () => useContext(LojaContext);

export default { LojaContext, LojaProvider };
