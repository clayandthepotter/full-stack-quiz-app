const database = [
	{
		id: 1,
		question: 'What is the object type?',
		topic: 'JavaScript',
		answer:
			'An object is a way to store and handle data in JavaScript. It accomplishes this with key: value pairs. It is a way to store more complex and holistic data versus an array, which simply stores values based on an index reference system.',
		correctAnswer:
			'An object is a way to store and handle data in JavaScript.',
		A: 'An object is a way to store and handle data using key: value pairs.',
		B: 'It is a function that returns a value',
		C: 'It simply stores values based on an index reference system',
		D: 'It is a boolean statement',
	},
	{
		id: 2,
		question:
			'What keyword is used to declare a variable in JavaScript?',
		topic: 'JavaScript',
		answer:
			"In JavaScript, the 'var', 'let', and 'const' keywords are used to declare variables.",
		correctAnswer:
			"In JavaScript, the 'var', 'let', and 'const' keywords are used to declare variables.",
		A: "'variable'",
		B: "'v'",
		C: "'declare'",
		D: "'variableDeclaration'",
	},
	{
		id: 3,
		question: "What does the '=== ' operator do in JavaScript?",
		topic: 'JavaScript',
		answer:
			"The '===' operator in JavaScript checks for both value and type equality.",
		correctAnswer:
			"The '===' operator in JavaScript checks for both value and type equality.",
		A: 'It assigns a value to a variable',
		B: 'It checks for value equality only',
		C: 'It checks for type equality only',
		D: 'It performs a bitwise operation',
	},
	{
		id: 4,
		question: "What is the purpose of 'NaN' in JavaScript?",
		topic: 'JavaScript',
		answer:
			"'NaN' stands for 'Not a Number' in JavaScript and is a special value returned when a mathematical operation can't produce a meaningful result.",
		correctAnswer:
			"'NaN' stands for 'Not a Number' in JavaScript and is a special value returned when a mathematical operation can't produce a meaningful result.",
		A: 'It represents a numeric value',
		B: "It stands for 'Number and Number'",
		C: 'It represents an infinite value',
		D: "It stands for 'Not Available Number'",
	},
	{
		id: 5,
		question: 'What is an IIFE in JavaScript?',
		topic: 'JavaScript',
		answer:
			"IIFE stands for Immediately Invoked Function Expression. It is a function that is executed right after it's created.",
		correctAnswer:
			"IIFE stands for Immediately Invoked Function Expression. It is a function that is executed right after it's created.",
		A: "It stands for 'Internal Iterative Function Execution'",
		B: 'It is an object-oriented programming concept',
		C: 'It is a loop statement',
		D: 'It is a type of variable',
	},
	{
		id: 6,
		question: "What is the 'this' keyword in JavaScript?",
		topic: 'JavaScript',
		answer:
			"In JavaScript, 'this' refers to the object to which the current code belongs. Its value is determined by how a function is called.",
		correctAnswer:
			"In JavaScript, 'this' refers to the object to which the current code belongs. Its value is determined by how a function is called.",
		A: 'It refers to the previous code',
		B: 'It is a keyword for declaring variables',
		C: 'It is a data type',
		D: 'It is a JavaScript framework',
	},
	{
		id: 7,
		question:
			"What is the purpose of 'call' and 'apply' methods in JavaScript?",
		topic: 'JavaScript',
		answer:
			"'call' and 'apply' are methods in JavaScript that are used to invoke a function with a specified 'this' value and arguments provided individually or as an array.",
		correctAnswer:
			"'call' and 'apply' are methods in JavaScript that are used to invoke a function with a specified 'this' value and arguments provided individually or as an array.",
		A: 'They are used for mathematical operations',
		B: 'They are used for creating objects',
		C: 'They are used for looping',
		D: 'They are used for invoking functions with specific contexts and arguments',
	},
	{
		id: 8,
		question:
			"What is the purpose of the 'map' function in JavaScript?",
		topic: 'JavaScript',
		answer:
			"The 'map' function in JavaScript is used to create a new array by applying a given function to each element of an existing array.",
		correctAnswer:
			"The 'map' function in JavaScript is used to create a new array by applying a given function to each element of an existing array.",
		A: 'It is used to filter elements in an array',
		B: 'It is used to iterate over the elements of an array',
		C: 'It is used to perform mathematical operations on an array',
		D: 'It is used to create a new array by applying a function to each element of an existing array',
	},
	{
		id: 9,
		question: "What does the 'let' keyword do in JavaScript?",
		topic: 'JavaScript',
		answer:
			"'let' is used to declare a block-scoped variable in JavaScript. It allows you to declare a variable that is limited in scope to the block, statement, or expression on which it is used.",
		correctAnswer:
			"'let' is used to declare a block-scoped variable in JavaScript. It allows you to declare a variable that is limited in scope to the block, statement, or expression on which it is used.",
		A: 'It is used to declare a global variable',
		B: 'It is used to declare a constant variable',
		C: 'It is used to declare a function',
		D: 'It is used to declare a block-scoped variable',
	},
	{
		id: 10,
		question:
			"What is the purpose of the 'async' keyword in JavaScript?",
		topic: 'JavaScript',
		answer:
			"The 'async' keyword is used to define asynchronous functions. An asynchronous function is a function that operates asynchronously via the event loop, using an 'async' keyword before the function declaration.",
		correctAnswer:
			"The 'async' keyword is used to define asynchronous functions. An asynchronous function is a function that operates asynchronously via the event loop, using an 'async' keyword before the function declaration.",
		A: 'It is used to define a synchronous function',
		B: 'It is used to define an anonymous function',
		C: 'It is used to define a callback function',
		D: 'It is used to define asynchronous functions',
	},
];

export default database;
