import React, { useState, useEffect } from "react";

let x = 0;

//create your first component
export function Home() {
	const [todo, setTodo] = useState("");
	const [tareas, setTarea] = useState([]);

	let addTodo = "";

	function addTodos(event, item) {
		addTodo = event.target.value;
		//console.log(todo);
		if (event.key === "Enter") {
			if (addTodo) {
				tareas.push(addTodo);
				setTodo("");
			} else {
				alert("You must write something!");
			}
		}
		x = tareas.length;
	}

	function removeItem(i) {
		let newtareas = tareas.filter(item => item != i);
		x = newtareas.length;
		setTarea(newtareas);
	}

	const TodosHTML = tareas.map((tarea, i) => {
		return (
			<li
				className="list-group-item"
				onClick={() => {
					removeItem(tarea);
				}}
				key={i}
				id={i}
				value={tarea}>
				{tarea}
			</li>
		);
	});

	return (
		<div className="list">
			<div className="text-center mt-5">
				<h1 className="titulo">todos</h1>
			</div>
			<div className="text-center mt-5">
				<ul className="list-group list-group-flush">
					<input
						id="myInput"
						value={todo}
						placeholder="Enter your to do's"
						onChange={e => setTodo(e.target.value)}
						onKeyPress={e => addTodos(e, todo)}></input>
					<div>{TodosHTML}</div>
				</ul>
			</div>

			<div className="card-footer text-muted total"> {x} items left</div>
		</div>
	);
}
