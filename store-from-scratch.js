// import { createStore } from 'redux';

const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state+1;
		case 'DECREMENT':
			return state-1;
	}

	return state;
};

const createStore = (reducer) => {
	let state;
	let listeners = [];

	console.log(state);

	const getState = () => state;
	const dispatch = (action) => {
		console.log(state);
		state = reducer(state, action);
		listeners.forEach (listener => listener());
		return state;
	};
	const subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			listeners = listeners.filter(l => l !== listener);
		}
	}

	dispatch({});
	return { getState, dispatch, subscribe};
};


const store = createStore(counter);

const render = () => {
	document.body.innerText = store.getState();
	// console.log('Loaded');
}

store.subscribe(render);
render();

document.addEventListener('click', () => {
	store.dispatch({type: 'INCREMENT'});
})