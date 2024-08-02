import { useEffect } from "react";
import React, { useState } from "react";




//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todo, setTodo] = useState([]);
	const [inputValue, setInputValue] = useState("")

	const obtenerTareas = () => {
		fetch("https://playground.4geeks.com/todo/users/javier36")
			.then(resp => {
				console.log(resp);
				if (!resp.ok) {
					crearAgendas()
					

				} else {
					return resp.json()
				}
			})
			.then(data => setTodo(data.todos))
			.catch(error => console.log(error))

	}
	const crearAgendas = () => {
		fetch("https://playground.4geeks.com/todo/users/javier36", {
			method: "POST",
			headers:
			{
				"Content-Type": "application/json",
				
			},
		})
			.then((response) => response.json())
			.then((result) => obtenerTareas())
			.catch((error) => console.error(error));
	};

	const crearTareas = () => {
		fetch("https://playground.4geeks.com/todo/todos/javier36", {
			method: "POST",
			headers:
			{
				"Content-Type": "application/json",
				
			},
			body:JSON.stringify ({
				label:inputValue,
				is_done:false
			})
		})
			.then((response) => response.json())
			.then((result) => {
				obtenerTareas()
			setInputValue("")
			})
			.catch((error) => console.error(error));

	}






	useEffect(() => {
		obtenerTareas()
	}, [])



	return (

		<div className="card mb-3">
			<h1>my todo </h1>
			<div className="row g-0 ">
				<ul>
					<li>
						<input
							type="text"
							onChange={(e) => setInputValue(e.target.value)}
							value={inputValue}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									crearTareas ()
									
								}
							}}
							placeholder="firs-name"></input>

					</li>

					{todo.map((item, index) => (
						<li>
							{item.label} {""}
							<i class="fa-solid fa-trash"
								onClick={() =>
									setTodo(
										todo.filter(
											(t, currentIndex) =>
												index != currentIndex
										)
									)
								}></i>
						</li>
					))}

				</ul>

			</div>


			<div>{todo.length}text


			</div>



		</div>
	);
};

export default Home;
