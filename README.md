# ReactJS Challenge | GoStack
 Esse desafio tem por objetivo revisar os conceitos básicos do ReactJS e conectar um projeto React com uma API node.
<h2 align="center">ReactJS Challenge</h2>

___

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
  <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#package-como-baixar-e-executar-o-projeto">Baixar e Executar</a>&nbsp;
</h3>

___

<div align="center" ><img src="https://media.giphy.com/media/NBV86j6Jh1JnavtelY/giphy.gif" width="500"></div>

- [**Link do vídeo completo sobre o projeto**](https://www.youtube.com/watch?v=eni8ITlmM4I)

___

## :information_source: Sobre

Esse desafio tem o intuíto de revisar os conceitos de Estado e Imutabilidade do ReactJS além de conectar essa aplicação básica ReactJS com a API Node criada no desafio de NodeJS  e que por fim, consigamos adicionar e remover elementos, nesse caso repositórios, do back-end pelo front-end revisando estruturas básicas de funções que realizam essas requisições de adicionar elementos e remover elementos.

* Página Inicial:
 
  <img src="https://i.imgur.com/P66DOns.png" width="500"> 

* Estado e Imutabilidade
  ```js
    const [ repositories, setRepositories ] = useState([]);

    useEffect(() => {
      //lsitando e atualizando os repositórios
      api.get('repositories').then(response => {
        setRepositories(response.data)
        //preenchendo o array repositories com os nossos dados do back-end
      });
    }, []);
  ```
  - Aqui temos a definição da variável Estado repositórios que é uma lista de objetos em que cada objeto seria um repositório e também definimos a função que atualiza essa variável Estado que é a setRepositories.
   - Relembrando que a função useState retorna 2 ítens, o 1º é a variável Estado e o 2º é a função que a atualiza.
  - Também temos o uso do useEffect que é uma função que tem por objetivo executar determinada função quando algo acontecer, nesse caso, o useEffect executa a função de atualização da variável Estado com os dados do back-end assim que a página é carregada.
   - Relembreando que no ReactJS não mostramos direto os dados do back-end na tela, primeiro nós atualizamos nossa variável Estado com os dados do back-end e com essa variável Estado nós mostramos os dados no front-end.

* Requisição de Adição de Recursos/repositórios
  ```js
      async function handleAddRepository() {
        const response = await api.post('repositories', { 
          title: 'ignite - ReactJS',
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
    ```
  - Além de adicionarmos o novo elemento ao bank-end, também usamos o conceito de Imutabilidade para atualizarmos a variável Estado com o novo elemento.

* Requisição de Remoção de Recursos/repositórios
  ```js
   async function handleRemoveRepository(id) {
      await api.delete(`repositories/${id}`);
      const newRepositories = repositories.filter(repository => repository.id !== id);
      setRepositories(newRepositories);
   }
  ```
   - Assim como na adição, temos que atualizar a variável Estado usando o conceito de imutabilidade de não alterar o mesmo espaço da memória e sim criar um novo, além disso usamos o método filter que verifica cada elemento de uma lista com a regra dada e retorna a lista de elementos que respeitam essa regra.
  
___
## :interrobang: Motivo

Esse projeto tem por objetivo por em prática os conceitos iniciais sobre Estado, Imutabilidade, conexão de uma API Rest com um projeto ReactJS, adição e remoção de elementos via fron-end do ReactJS.

___
## :seedling: Requisitos Mínimos

Node.js, Yarn(ou NPM), React e Typescript. 

___
## :rocket: Tecnologias Utilizadas 

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [NodeJS](https://nodejs.org/en/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [React](https://pt-br.reactjs.org/)
- [Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)
___
## :package: Como baixar e executar o projeto

  - Clonar o projeto:
    ```bash
     git clone https://github.com/Aszurar/reactjsChallenge.git
    ```
  - É necessário a instalação do yarn de acordo com seu sistema operacional, para isso veja como no site do [Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)
  - Instalação das dependências:
    - Execute o comando abaixo dentro da pasta do projeto 
    ```bash
      yarn
    ```
 
 - Execução 
   - É necessário que se tenha clonado, instalado todas dependências e executado a api node desenvolvida no projeto anterior que é da aplicação Node, esse é o nosso back-end para esse projeto: [NodeJs Challenge](https://github.com/Aszurar/nodejsChallenge)
   - Abra a pasta do projeto com alguma IDE(Vscode) ou simplesmente abra o terminal na pasta do projeto e execute o comando abaixo:
    ```bash
       yarn start
    ``` 
___
Desenvolvido por :star2: Lucas de Lima Martins de Souza.

