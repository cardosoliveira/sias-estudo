# React + TypeScript + Vite

Este projeto utiliza React, TypeScript e Vite para criar uma aplicação web moderna.

## Requisitos

- Node.js versão 20.18

## Instalação

1. Instale o Node.js versão 20.18 a partir do [site oficial](https://nodejs.org/).
2. Clone este repositório e abra o projeto na pasta `GETIV-CVP`.
3. Abra o terminal na pasta do projeto e execute o comando abaixo para instalar todas as dependências necessárias:

   ```sh
   npm install
   ```

## Execução

Após a instalação das dependências, execute o comando abaixo para iniciar a aplicação:

```sh
npm run dev
```

Uma URL será exibida no terminal, onde a aplicação estará hospedada. Abra essa URL no seu navegador para visualizar a aplicação.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
.gitignore
eslint.config.js
index.html
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
public/
    vite.svg
src/
    App.tsx
    config.ts
    index.css
    main.tsx
    vite-env.d.ts
    assets/
        CAIXA-LOGO.png
        react.svg
        icon/
            icon_cadastro_produto.png
            icon_consulta_produto.png
            icon_default.png
            ...
    components/
        Card/
        Footer/
        HeaderPage/
        ModalWarning/
        SideBar/
    pages/
        Home/
        Produtos/
    routes/
        Router.tsx
    services/
        api.ts
    types/
        produto.ts
```

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Styled-components
- Axios
- Material UI
- FontAwesome
- Notistack
