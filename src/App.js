import "./App.css";
import React, { useContext } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
	//Get our current todo list (database)
	const [todos, setTodos] = React.useState([
		{ text: "Complete Homework", isCompleted: false },
		{ text: "Do household chores", isCompleted: false },
		{ text: "Play games", isCompleted: false },
	]);
  
	const addTodo = (text) => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};

	const completeTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};

	return (
		<div className="app">
			<div className="todo-list">
				{todos.map((todo, index) => (
					<Todo key={index} index={index} todo={todo} completeTodo={completeTodo} />
				))}

				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	);
}

export default App;
