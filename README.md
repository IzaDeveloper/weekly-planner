# 🗓️ Weekly Planner

Choose your language / Escolha seu idioma

- [English](#english)
- [Português](#português)


## English

A weekly planner built with React, Zustand, and TailwindCSS. It allows you to create, edit, delete, and organize tasks by day of the week. It supports multiple languages (PT/EN), dark/light themes, and data persistence using localStorage.


## 🚀 Features

- ✅ Add, edit, and delete tasks
- ✅ Organize tasks by day of the week (drag and drop)
- ✅ Dark and light theme
- ✅ Multi-language support (🇧🇷 Portuguese / 🇺🇸 English)
- ✅ Automatic task persistence in the browser
- ✅ E2E testing with Cypress

## 🖼️ Preview

![preview](https://your-image-link-if-you-have-one)


## 🧠 Technologies used

- **React**
- **Zustand** 
- **TailwindCSS** 
- **i18next + react-i18next** 
- **uuid**
- **Cypress** 

## 📦 Install

### 1. Clone the repository

```bash
git clone https://github.com/IzaDeveloper/weekly-planner
cd weekly-planner
```

### 2. Install the dependencies
```bash
npm install
```

### 3. Start the project
```bash
npm run dev
```

## 🧪 Cypress

### Run the tests

```bash
npx cypress open
```

### Or to run in the terminal (headless mode)
```bash
npx cypress run
```

## 🌍 Language Support

Translation is done using i18next.
- en.json
- pt.json

## 🌗 Theme

A button allows toggling between light and dark themes.
The theme is persisted in localStorage.

## 🧠 How it works

- Tasks are stored in the global state using Zustand.
- Each task has a title, id, and day.
- Tasks are automatically saved to localStorage.
- Language changes are dynamically reflected throughout the application.
- Drag and drop between days is implemented using native HTML5 events.


## 🧰 Main Dependencies

| Package          | Purpose                      |
|------------------|------------------------------|
| `react`          | Main library                 |
| `zustand`        | Global state management      |
| `tailwindcss`    | Styling                      |
| `react-i18next`  | Internationalization         |
| `i18next`        | Translation engine           |
| `uuid`           | Unique ID generation         |
| `cypress`        | End-to-end testing           |


👨‍💻 Author

Developed by [Izabelle](https://github.com/IzaDeveloper) 💻

## Português

Um planner semanal feito com React, Zustand e TailwindCSS. Permite a criação, edição, exclusão e organização de tarefas por dia da semana. Possui suporte a múltiplos idiomas (PT/EN), tema escuro/claro e persistência de dados no `localStorage`.


## 🚀 Funcionalidades

- ✅ Adicionar, editar e excluir tarefas
- ✅ Organizar tarefas por dia da semana (arrastar e soltar)
- ✅ Tema escuro e claro
- ✅ Suporte a múltiplos idiomas (🇧🇷 Português / 🇺🇸 Inglês)
- ✅ Persistência automática das tarefas no navegador
- ✅ Testes E2E com Cypress

## 🖼️ Demonstração

![preview](https://your-image-link-if-you-have-one)


## 🧠 Tecnologias utilizadas

- **React**
- **Zustand** 
- **TailwindCSS** 
- **i18next + react-i18next** 
- **uuid**
- **Cypress** 

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/repo.git
cd repo
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Inicie o projeto
```bash
npm run dev
```

## 🧪 Cypress

### Executar os testes:

```bash
npx cypress open
```

### Ou para rodar no terminal (modo headless):
```bash
npx cypress run
```

## 🌍 Suporte a idiomas

A tradução é feita com i18next.

- en.json
- pt.json

## 🌗 Tema

Um botão permite alternar entre tema claro e escuro.
O tema é persistido no localStorage.

## 🧠 Como funciona

- As tarefas são armazenadas no estado global via Zustand.
- Cada tarefa tem um título, id e dia.
- As tarefas são salvas no localStorage automaticamente.
- A mudança de idioma reflete dinamicamente em toda a aplicação.
- O drag and drop entre os dias é feito com eventos nativos de HTML5.


## 🧰Dependências principais

| Package          | Função                       |
|------------------|------------------------------|
| `react`          | Biblioteca principal         |
| `zustand`        | Estado global                |
| `tailwindcss`    | Estilização                  |
| `react-i18next`  | Internacionalização          |
| `i18next`        | Motor de tradução            |
| `uuid`           | Geração de IDs únicos        |
| `cypress`        | Testes end-to-end            |


👨‍💻Autor

Desenvolvido por [Izabelle](https://github.com/IzaDeveloper) 💻