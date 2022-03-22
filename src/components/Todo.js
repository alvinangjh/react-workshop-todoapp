//This is my functional component  to display the Todo list
function Todo({ index, todo, completeTodo }) {
	return (
		<div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
			{todo.text}
			<div>
				<button onClick={() => completeTodo(index)}>Complete</button>
			</div>
		</div>
	);
}

export default Todo;
