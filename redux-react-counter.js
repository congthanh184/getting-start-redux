// import { createStore } from 'redux';
// console.log('loaded');

const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state+1;
		case 'DECREMENT':
			return state-1;
	}

	return state;
};

// const Counter = ({ value, onIncrement, onDecrement }) => (
// 		<div>
// 			<h1>{value}</h1>
// 			<button onClick="{onIncrement}">+</button>
// 			<button onClick="{onDecrement}">-</button>
// 		</div>
// );


// const { createStore } = Redux;
// const store = createStore(counter);

// const render = () => {
// 	console.log('loaded render');
// 	ReactDOM.render(
// 		<Counter 
// 			value={store.getValue()}
// 			onIncrement={() => store.dispatch({type: 'INCREMENT'})}
// 			onDecrement={() => store.dispatch({type: 'DECREMENT'})}
// 		/>, 
// 		document.getElementsById('root');
// 		);
// };

// store.subscribe(render);
// render();
