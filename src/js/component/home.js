import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

let tareas = [];
let i = 0;
let tarea = "";
let x = 0;

//create your first component
export function Home() {
	const [todo, setTodo] = useState("");
	const [tododel, setDelTodo] = useState("");
	let addTodo = "";
	let delTodo = "";

	function addTodos(event, addTodo) {
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

	function alertClicked(event) {
		//console.log(event);
		alert("You clicked the third ListGroupItem");
	}

	const TodosHTML = tareas.map((tarea, i) => {
		return (
			<li key={i} id={i} value={tarea}>
				{tarea}
			</li>
		);
	});

	return (
		<div className="list">
			<div className="text-center mt-5">
				<h1 className="titulo">My To do list</h1>
			</div>
			<div className="text-center mt-5">
				<ul className="list-group">
					<input
						id="myInput"
						placeholder="Enter your to do's"
						value={todo}
						onChange={e => setTodo(e.target.value)}
						onKeyPress={e => addTodos(e, todo)}></input>
					<div className="list-group-items"> {TodosHTML}</div>
				</ul>
			</div>

			<div className="card-footer text-muted total"> {x} items left</div>
		</div>
	);
}
