import React from "react";

function TodoForm({ addTodo }) {
	const [newTodo, setValue] = React.useState("");

	const handleSubmit = (e) => {
		//Synthetic event
		e.preventDefault();

		if (!newTodo) return;
        
        //newTodo = Sleep at 10pm my dream
		addTodo(newTodo);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" className="input" value={newTodo} onChange={(e) => setValue(e.target.value)} />
		</form>
	);
}

export default TodoForm;
