import React from "react";

const Form = ({setStatus, inputText, setInputText, todos, setTodos }) => {
	const inputTextHandler = (e) => {
		console.log(e.target.value);
		setInputText(e.target.value);
	};
	const submitTodoHandler = (e) => {
		e.preventDefault();
		console.log("hey");
		setTodos([
			...todos,
			{ text: inputText, completed: false, id: Math.random() * 1000 },
		]);
		setInputText("");
	};
	const statusHandler = (e) => {
		setStatus(e.target.value)
	};

	return (
		<form>
			<input
				value={inputText}
				type="text"
				className="toto-input"
				onChange={inputTextHandler}
			/>
			<button type="submit" onClick={submitTodoHandler} className="todo-button">
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select onClick={statusHandler} name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
};
export default Form;
