import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";

const counter = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
	}

	return state;
};

const CounterApp = ({ value, onIncrement, onDecrement }) => {
	return (
		<div>
			<h1>
				{value}
			</h1>
			<button onClick={onIncrement}>+</button>
			<button onClick={onDecrement}>-</button>
		</div>
	);
};

const store = createStore(counter);

const render = () => {
	ReactDOM.render(
		<CounterApp
			value={store.getState()}
			onIncrement={() => store.dispatch({ type: "INCREMENT" })}
			onDecrement={() => store.dispatch({ type: "DECREMENT" })}
		/>,
		document.getElementById("root")
	)
};

store.subscribe(render);
render();

registerServiceWorker();
