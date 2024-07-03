import React, { useState } from "react";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todo, setTodo] = useState([]);
	const [inputValue, setInputValue] = useState("")

	return (
		<div className="card container">
			<h1>my todo </h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								setTodo(todo.concat([inputValue]));
								setInputValue("");
							}
						}}
						placeholder="firs-name"></input>

				</li>

				{todo.map((item, index) => (
					<li>
						{item} {""}
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
			<div>{todo.length}text</div>

		</div>
	);
};

export default Home;
