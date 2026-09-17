# TODO App – Redux Toolkit

A responsive TODO application built with **React** and **Redux Toolkit**.
This project demonstrates state management using Redux Toolkit along with **Axios** for API communication and **MockAPI** for backend data storage.

## 🚀 Features

* Add new todos
* Fetch todos from MockAPI
* Edit existing todos
* Update todo status
* Delete todos
* Filter todos by status
* Global state management using Redux Toolkit
* API requests using Axios
* Loading state handling
* Responsive user interface

## 🛠️ Technologies Used

* React.js
* Redux Toolkit
* React Redux
* Axios
* JavaScript (ES6+)
* HTML5
* CSS3
* MockAPI
* Vite

## 📂 Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Main.jsx
│   └── TodoCard.jsx
│
├── redux/
│   ├── store.js
│   └── TodoSlice.js
│
├── App.jsx
├── App.css
└── main.jsx
```

## 🔄 CRUD Operations

The application uses Axios to communicate with the MockAPI backend.

| Operation   | Method    | Purpose                    |
| ----------- | --------- | -------------------------- |
| Get Todos   | GET       | Fetch all todos            |
| Add Todo    | POST      | Create a new todo          |
| Update Todo | PUT/PATCH | Edit todo or update status |
| Delete Todo | DELETE    | Remove a todo              |

## 🧠 Redux Toolkit

Redux Toolkit is used to manage the application's global TODO state.

The Redux store contains the TODO data and filter state.

Main Redux concepts implemented:

* `configureStore`
* `createSlice`
* `useSelector`
* `useDispatch`
* Redux actions
* Reducers
* Centralized state management

### State Structure

```javascript
{
    todos: [],
    filter: "all"
}
```

## 🌐 API Integration

Axios is used to perform CRUD operations with MockAPI.

The application follows this flow:

```text
React Component
       ↓
Axios API Request
       ↓
MockAPI
       ↓
Redux Dispatch
       ↓
Redux Store
       ↓
React UI
```

## 📦 Installation

Clone the repository:

```bash
git clone <https://github.com/dominic-rozario1210/todo-crud-redux>
```

Navigate to the project directory:

```bash
cd todo-app-redux
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will run locally using Vite.

## 📱 Responsive Design

The application is designed to work across:

* Desktop
* Tablet
* Mobile devices

## 🎯 Learning Objectives

This project was created to practice:

* React component-based architecture
* Redux Toolkit state management
* API integration using Axios
* CRUD operations
* Managing asynchronous API requests
* Connecting React components with Redux
* Global state management
* Building a responsive React application



## 👨‍💻 Author

**Dominic Rozario**

Built as part of React and Redux Toolkit learning and project practice.
