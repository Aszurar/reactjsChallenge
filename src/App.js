import React, { useEffect, useState } from "react";
import  api from "./services/api";

import "./styles.css";

function App() {
  //Estado que recebe os dados do back-end e sua função de atualização
  const [ repositories, setRepositories ] = useState([]);

  useEffect(() => {
    //lsitando e atualizando os repositórios
    api.get('repositories').then(response => {
      setRepositories(response.data)
      //preenchendo o array repositories com os nossos dados do back-end
    });
  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', { 
      title: 'LaunchBase',
      url: 'https://github.com/Aszurar/nodejsChallenge',
      techs: [
        'Nodejs',
        'html',
        'css',
        'Reacjs'
      ],
    });

    const repository = response.data

    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
     await api.delete(`repositories/${id}`);
     //atualização do Estado, lembrando que sempre criamos um novo array e não alteramos os dados originais!.
     const newRepositories = repositories.filter(repository => repository.id !== id);
    //filter sempre retornará aqueles elements que respoeitam a regra dada
     setRepositories(newRepositories);
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => 
          <li key={repository.id}>{repository.title}
            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remover
            </button>
          </li>
        )}          
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
