import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

let tareas = [];
let i = 0;
let tarea = "";
let x = 0;

//create your first component
export function Home() {
	let [value, setName] = useState("");
	let addTodo = "";
	//let tareas = [];

	function addTodos(event, addTodo) {
		if (event.key === "Enter") {
			tareas.push(addTodo);
			//		console.log(tareas, tareas.length);
		}
		x = tareas.length;
	}

	const TodosHTML = tareas.map((tarea, i) => {
		return <li key={tarea}>{tarea}</li>;
	});

	return (
		<div className="list">
			<div className="text-center mt-5">
				<h1 className="titulo">todos</h1>
			</div>
			<div className="text-center mt-5">
				<ul className="list-group">
					<input
						id="myInput"
						placeholder="Enter your to do's"
						onChange={e => setName(e.target.value)}
						onKeyPress={e => addTodos(e, value)}></input>
					{TodosHTML}
				</ul>
			</div>
			<div className="card-footer text-muted total">Total: {x} todos</div>
		</div>
	);
}
