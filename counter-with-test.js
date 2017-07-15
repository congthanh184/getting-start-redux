// import { createStore } from 'redux';
// import { expect } from 'expect';

const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state+1;
		case 'DECREMENT':
			return state-1;
	}

	return state;
};

expect(counter(0, { type: "INCREMENT" })).toEqual(1);

expect(counter(1, { type: "DECREMENT" })).toEqual(0);

expect(counter(3, { type: "Something else" })).toEqual(3);

console.log("Test passed");
