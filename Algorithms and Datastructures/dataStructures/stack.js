// Stack class
class Stack {
	// Array is used to implement stack
	constructor() {
		this.items = [];
	}

	// push function
	push(element) {
		// push element into the items
		this.items.push(element);
	}

	// pop function
	pop() {
		// return top most element in the stack
		// and removes it from the stack
		// Underflow if stack is empty
		if (this.items.length == 0) return "Underflow";
		return this.items.pop();
	}

	// peek function
	peek() {
		// return the top most element from the stack
		// but does'nt delete it.
		return this.items[this.items.length - 1];
	}

	// isEmpty function
	isEmpty() {
		// return true if stack is empty
		return this.items.length == 0;
	}

	// printStack function
	printStack() {
		let str = "";
		for (let i = 0; i < this.items.length; i++) str += this.items[i] + " ";
		return str;
	}
}

// creating object for stack class
let stack = new Stack();

// testing isEmpty and pop on an empty stack

// returns false
console.log(stack.isEmpty());

// returns Underflow
console.log(stack.pop());
