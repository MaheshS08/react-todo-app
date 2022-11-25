import "./App.css";
import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);

	useEffect(() => {
		if (localStorage.getItem("todos")) {
			const retriveProducts = JSON.parse(localStorage.getItem("todos"));
			console.log("items ", retriveProducts);
			if (retriveProducts) console.log("items2 ", retriveProducts);
		}
	}, []);

	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	}, [todos, status]);

	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFilteredTodos(todos.filter((todo) => todo.completed === true));
				break;
			case "uncompleted":
				setFilteredTodos(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	const saveLocalTodos = () => {
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	// const getLocalTodos = () => {
	// 	if (localStorage.getItem("todos") === null) {
	// 		localStorage.setItem("todos", JSON.stringify([]));
	// 	} else {
	// 		let localtodos = JSON.parse(localStorage.getItem("todos"));
	// 		setTodos(localtodos);
	// 	}
	// };

	return (
		<div className="App">
			<header>
				<h1>To Do List</h1>
			</header>
			<Form
				inputText={inputText}
				todos={todos}
				setTodos={setTodos}
				setInputText={setInputText}
				setStatus={setStatus}
			/>
			<TodoList
				setTodos={setTodos}
				filteredTodos={filteredTodos}
				todos={todos}
			/>
		</div>
	);
}

export default App;
