import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";
import Footer from "./Footer";
import "../../src/components/styles.css";

function App() {
	const [items, setItems] = useState([]);

	function addItem(inputText) {
		setItems((prevItems) => {
			return [...prevItems, inputText];
		});
	}

	function deleteItem(id) {
		setItems((prevItems) => {
			return prevItems.filter((item, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div>
			<div className="container">
				<div className="heading">
					<h1>To-Do List</h1>
				</div>
				<InputArea onAdd={addItem} />
				<div>
					<ul>
						{items.map((todoItem, index) => (
							<TodoItem
								key={index}
								id={index}
								text={todoItem}
								onChecked={deleteItem}
							/>
						))}
					</ul>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
