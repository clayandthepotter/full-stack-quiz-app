-- Create a new database called 'QuestionsDB'
CREATE DATABASE questionsdb;

-- Create questions and answers for Javascript quiz

INSERT INTO questions (quiz_id, question_text) VALUES
(1, 'What is the purpose of the "console.log" function in JavaScript?'),
(1, 'Which of the following is a correct way to declare a constant in JavaScript?'),
(1, 'Which method is used to parse a JSON string to an object?'),
(1, 'What will "typeof null" return in JavaScript?'),
(1, 'Which operator is used to check both the value and type of a variable?'),
(1, 'What method can be used to convert an array to a string in JavaScript?'),
(1, 'What HTML tag is used to embed JavaScript code?'),
(1, 'Which of these is a JavaScript framework?'),
(1, 'How do you declare a function in JavaScript?'),
(1, 'What will be the output of "console.log(1 +  `2` + `3`);" in JavaScript?');


-- Choices for Question 1
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(1, 'To display data in the HTML page', FALSE),
(1, 'To write debugging information to the console', TRUE),
(1, 'To read user input from the console', FALSE),
(1, 'To save data in the browser’s memory', FALSE);

-- Choices for Question 2
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(2, 'let constantName;', FALSE),
(2, 'var constantName;', FALSE),
(2, 'const constantName;', TRUE),
(2, 'constant constantName;', FALSE);

-- Choices for Question 3
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(3, 'JSON.parse()', TRUE),
(3, 'JSON.stringify()', FALSE),
(3, 'JSON.toObject()', FALSE),
(3, 'JSON.convert()', FALSE);

-- Choices for Question 4
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(4, '"object"', TRUE),
(4, '"null"', FALSE),
(4, '"undefined"', FALSE),
(4, 'an error', FALSE);

-- Choices for Question 5
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(5, '==', FALSE),
(5, '=', FALSE),
(5, '===', TRUE),
(5, '!=', FALSE);

-- Choices for Question 6
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(6, 'toString()', TRUE),
(6, 'join()', FALSE),
(6, 'convert()', FALSE),
(6, 'parse()', FALSE);

-- Choices for Question 7
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(7, '<scripting>', FALSE),
(7, '<js>', FALSE),
(7, '<javascript>', FALSE),
(7, '<script>', TRUE);

-- Choices for Question 8
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(8, 'React', TRUE),
(8, 'HTML5', FALSE),
(8, 'CSS3', FALSE),
(8, 'XML', FALSE);

-- Choices for Question 9
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(9, 'function: myFunction()', FALSE),
(9, 'function myFunction()', TRUE),
(9, 'function = myFunction()', FALSE),
(9, 'function => myFunction()', FALSE);

-- Choices for Question 10
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(10, '123', FALSE),
(10, '6', FALSE),
(10, '15', FALSE),
(10, '"123"', TRUE);


-- Create questions and answers for React quiz

INSERT INTO questions (quiz_id, question_text) VALUES
(2, 'What is React mainly used for?'),
(2, 'Which of the following is the correct syntax for a functional component in React?'),
(2, 'How do you handle state in a class component in React?'),
(2, 'What is JSX in React?'),
(2, 'What is the purpose of the render() method in React class components?'),
(2, 'How do you pass a prop from a parent component to a child component in React?'),
(2, 'Which of the following is a hook in React?'),
(2, 'What is the use of the useEffect hook in React?'),
(2, 'How can you improve performance of a React application?'),
(2, 'In React, what is a higher-order component?');

-- Choices for Question 11
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(11, 'To style HTML pages', FALSE),
(11, 'To build user interfaces', TRUE),
(11, 'To manipulate the DOM directly', FALSE),
(11, 'To create backend services', FALSE);

-- Choices for Question 12
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(12, 'function MyComponent() { return <div />; }', TRUE),
(12, 'class MyComponent extends React.Component { render() { return <div />; } }', FALSE),
(12, 'MyComponent() => { return <div />; }', FALSE),
(12, '<MyComponent function() { return <div />; } />', FALSE);

-- Choices for Question 13
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(13, 'Using the setState method', TRUE),
(13, 'Using the useState hook', FALSE),
(13, 'Directly modifying the this.state object', FALSE),
(13, 'Calling the render() method with new state', FALSE);

-- Choices for Question 14
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(14, 'A JavaScript function library', FALSE),
(14, 'A type of JavaScript syntax for rendering', TRUE),
(14, 'A server-side rendering technique', FALSE),
(14, 'A special prop type', FALSE);

-- Choices for Question 15
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(15, 'To handle user inputs', FALSE),
(15, 'To update the component’s state', FALSE),
(15, 'To return the HTML and components to be rendered', TRUE),
(15, 'To make API calls', FALSE);

-- Choices for Question 16
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(16, '<ChildComponent prop={this.propValue} />', TRUE),
(16, '<ChildComponent => this.propValue />', FALSE),
(16, '<ChildComponent :prop="this.propValue" />', FALSE),
(16, '<ChildComponent @prop={this.propValue} />', FALSE);

-- Choices for Question 17
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(17, 'componentDidMount', FALSE),
(17, 'useEffect', TRUE),
(17, 'render', FALSE),
(17, 'useState', FALSE);

-- Choices for Question 18
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(18, 'To add event listeners in a component', FALSE),
(18, 'To update the document title', FALSE),
(18, 'For side effects in functional components', TRUE),
(18, 'To handle form submissions', FALSE);

-- Choices for Question 19
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(19, 'Using inline styles for components', FALSE),
(19, 'Minimizing component state', FALSE),
(19, 'Using memoization and PureComponent', TRUE),
(19, 'Increasing the use of stateful components', FALSE);

-- Choices for Question 20
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(20, 'A component that renders another component', TRUE),
(20, 'A base class for all components', FALSE),
(20, 'A component that can only render once', FALSE),
(20, 'A stateless functional component', FALSE);


-- Create questions and answers for HTML quiz

INSERT INTO questions (quiz_id, question_text) VALUES
(3, 'What does HTML stand for?'),
(3, 'Which HTML element defines the title of a document?'),
(3, 'What is the correct HTML element for inserting a line break?'),
(3, 'Choose the correct HTML element to define emphasized text'),
(3, 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?'),
(3, 'Which doctype is correct for HTML5?'),
(3, 'What HTML element is used to specify a footer for a document or section?'),
(3, 'Which HTML element defines navigation links?'),
(3, 'In HTML, which attribute is used to specify that an input field must be filled out?'),
(3, 'What is the purpose of the <canvas> element in HTML5?');

-- Choices for Question 21
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(21, 'Hyperlinks and Text Markup Language', FALSE),
(21, 'Hyper Text Markup Language', TRUE),
(21, 'Home Tool Markup Language', FALSE),
(21, 'Hyperlinking Text Marking Language', FALSE);

-- Choices for Question 22
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(22, '<head>', FALSE),
(22, '<meta>', FALSE),
(22, '<title>', TRUE),
(22, '<header>', FALSE);

-- Choices for Question 23
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(23, '<break>', FALSE),
(23, '<lb>', FALSE),
(23, '<br>', TRUE),
(23, '<line>', FALSE);

-- Choices for Question 24
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(24, '<i>', FALSE),
(24, '<em>', TRUE),
(24, '<strong>', FALSE),
(24, '<emphasize>', FALSE);

-- Choices for Question 25
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(25, 'src', FALSE),
(25, 'alt', TRUE),
(25, 'title', FALSE),
(25, 'longdesc', FALSE);

-- Choices for Question 26
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(26, '<!DOCTYPE html>', TRUE),
(26, '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN">', FALSE),
(26, '<!DOCTYPE HTML5>', FALSE),
(26, '<HTML>', FALSE);

-- Choices for Question 27
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(27, '<bottom>', FALSE),
(27, '<footer>', TRUE),
(27, '<section>', FALSE),
(27, '<foot>', FALSE);

-- Choices for Question 28
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(28, '<nav>', TRUE),
(28, '<navigate>', FALSE),
(28, '<links>', FALSE),
(28, '<navigation>', FALSE);

-- Choices for Question 29
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(29, 'required', TRUE),
(29, 'placeholder', FALSE),
(29, 'validate', FALSE),
(29, 'necessary', FALSE);

-- Choices for Question 30
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(30, 'To create draggable elements', FALSE),
(30, 'To display database records', FALSE),
(30, 'To draw graphics via scripting', TRUE),
(30, 'To create an interactive video player', FALSE);


-- Create questions and answers for CSS quiz

INSERT INTO questions (quiz_id, question_text) VALUES
(4, 'What does CSS stand for?'),
(4, 'Which property is used to change the background color?'),
(4, 'How do you add a background image to an element?'),
(4, 'Which CSS property controls the text size?'),
(4, 'How do you make each word in a text start with a capital letter?'),
(4, 'Which property is used to change the left margin of an element?'),
(4, 'How do you make the text bold?'),
(4, 'How can you make a list that lists its items with squares?'),
(4, 'How do you display hyperlinks without an underline?'),
(4, 'Which property is used to change the font of an element?');

-- Choices for Question 31
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(31, 'Computer Style Sheets', FALSE),
(31, 'Colorful Style Sheets', FALSE),
(31, 'Creative Style Sheets', FALSE),
(31, 'Cascading Style Sheets', TRUE);

-- Choices for Question 32
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(32, 'bgcolor', FALSE),
(32, 'color', FALSE),
(32, 'background-color', TRUE),
(32, 'background', FALSE);

-- Choices for Question 33
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(33, 'background-image: url(image.jpg);', TRUE),
(33, 'background: image.jpg;', FALSE),
(33, 'image: url(image.jpg);', FALSE),
(33, 'img {src: url(image.jpg);}', FALSE);

-- Choices for Question 34
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(34, 'font-size', TRUE),
(34, 'text-style', FALSE),
(34, 'text-size', FALSE),
(34, 'font', FALSE);

-- Choices for Question 35
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(35, 'text-transform: capitalize;', TRUE),
(35, 'text-transform: uppercase;', FALSE),
(35, 'font-style: capitalize;', FALSE),
(35, 'text-style: capital;', FALSE);

-- Choices for Question 36
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(36, 'margin-left', TRUE),
(36, 'padding-left', FALSE),
(36, 'indent', FALSE),
(36, 'text-align: left;', FALSE);

-- Choices for Question 37
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(37, 'font-weight: bold;', TRUE),
(37, 'text-style: bold;', FALSE),
(37, 'font: bold;', FALSE),
(37, 'text-weight: bold;', FALSE);

-- Choices for Question 38
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(38, 'list-style-type: square;', TRUE),
(38, 'list-style: square;', FALSE),
(38, 'list-type: square;', FALSE),
(38, 'list: square;', FALSE);

-- Choices for Question 39
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(39, 'text-decoration: none;', TRUE),
(39, 'text-decoration: no-underline;', FALSE),
(39, 'text-style: none;', FALSE),
(39, 'decoration: none;', FALSE);

-- Choices for Question 40
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(40, 'font-weight', FALSE),
(40, 'font-style', FALSE),
(40, 'text-font', FALSE),
(40, 'font-family', TRUE);


-- Create questions and answers for TypeScript quiz

INSERT INTO questions (quiz_id, question_text) VALUES
(5, 'What is TypeScript primarily used for?'),
(5, 'How do you declare a variable in TypeScript?'),
(5, 'Which of the following is a valid TypeScript type?'),
(5, 'How do you define an interface in TypeScript?'),
(5, 'What is the main advantage of using TypeScript over JavaScript?'),
(5, 'Which keyword is used for type assertions in TypeScript?'),
(5, 'How do you declare a class in TypeScript?'),
(5, 'What is the correct syntax for a TypeScript function with a return type?'),
(5, 'How can you make a property optional in a TypeScript interface?'),
(5, 'What TypeScript feature allows for working with multiple data types?');

-- Choices for Question 41
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(41, 'For adding more libraries to JavaScript', FALSE),
(41, 'For writing server-side applications', FALSE),
(41, 'For adding static typing to JavaScript', TRUE),
(41, 'For enhancing HTML pages', FALSE);

-- Choices for Question 42
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(42, 'var variableName;', FALSE),
(42, 'let variableName;', TRUE),
(42, 'variable variableName;', FALSE),
(42, 'new variableName;', FALSE);

-- Choices for Question 43
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(43, 'number', TRUE),
(43, 'integer', FALSE),
(43, 'float', FALSE),
(43, 'digit', FALSE);

-- Choices for Question 44
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(44, 'class InterfaceName {}', FALSE),
(44, 'model InterfaceName {}', FALSE),
(44, 'interface InterfaceName {}', TRUE),
(44, 'new InterfaceName {}', FALSE);

-- Choices for Question 45
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(45, 'Faster execution time', FALSE),
(45, 'Static typing and better tooling', TRUE),
(45, 'Higher performance in browsers', FALSE),
(45, 'Easier syntax than JavaScript', FALSE);

-- Choices for Question 46
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(46, 'type', FALSE),
(46, 'cast', FALSE),
(46, 'as', TRUE),
(46, 'convert', FALSE);

-- Choices for Question 47
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(47, 'create class ClassName {}', FALSE),
(47, 'class ClassName {}', TRUE),
(47, 'new class ClassName {}', FALSE),
(47, 'define class ClassName {}', FALSE);

-- Choices for Question 48
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(48, 'function functionName(): type {}', TRUE),
(48, 'function functionName() -> type {}', FALSE),
(48, 'function: functionName() type {}', FALSE),
(48, 'type functionName() {}', FALSE);

-- Choices for Question 49
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(49, 'Adding a question mark (?) before the property name', FALSE),
(49, 'Adding a question mark (?) after the property name', TRUE),
(49, 'Using the optional keyword', FALSE),
(49, 'Leaving the type undefined', FALSE);

-- Choices for Question 50
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(50, 'Interfaces', FALSE),
(50, 'Generics', TRUE),
(50, 'Any type', FALSE),
(50, 'Var type', FALSE);


-- Create questions and answers for SQL quiz

INSERT INTO questions (quiz_id, question_text) VALUES
(6, 'What does SQL stand for?'),
(6, 'Which SQL statement is used to extract data from a database?'),
(6, 'Which SQL statement is used to update data in a database?'),
(6, 'How do you select a column named "FirstName" from a table named "People"?'),
(6, 'Which operator is used to select values within a range in SQL?'),
(6, 'What is the correct SQL statement to delete a table?'),
(6, 'How can you return all the records from a table named "Users" where the "Age" is greater than 25?'),
(6, 'Which SQL keyword is used to sort the result-set?'),
(6, 'How do you insert a new row in a table?'),
(6, 'What statement is used to return only different values?');

-- Choices for Question 51
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(51, 'Structured Query Language', TRUE),
(51, 'Simple Query Language', FALSE),
(51, 'Sequential Query Language', FALSE),
(51, 'Standard Query Language', FALSE);

-- Choices for Question 52
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(52, 'EXTRACT', FALSE),
(52, 'GET', FALSE),
(52, 'SELECT', TRUE),
(52, 'PULL', FALSE);

-- Choices for Question 53
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(53, 'UPDATE', TRUE),
(53, 'MODIFY', FALSE),
(53, 'CHANGE', FALSE),
(53, 'ALTER', FALSE);

-- Choices for Question 54
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(54, 'FIND FirstName FROM People', FALSE),
(54, 'EXTRACT FirstName FROM People', FALSE),
(54, 'SELECT FirstName FROM People', TRUE),
(54, 'GET FirstName FROM People', FALSE);

-- Choices for Question 55
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(55, 'IN', FALSE),
(55, 'BETWEEN', TRUE),
(55, 'WITHIN', FALSE),
(55, 'RANGE', FALSE);

-- Choices for Question 56
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(56, 'REMOVE TABLE tablename', FALSE),
(56, 'DELETE TABLE tablename', FALSE),
(56, 'DROP TABLE tablename', TRUE),
(56, 'ERASE TABLE tablename', FALSE);

-- Choices for Question 57
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(57, 'SELECT * FROM Users WHERE Age > 25', TRUE),
(57, 'GET * FROM Users WHERE Age > 25', FALSE),
(57, 'EXTRACT * FROM Users WHERE Age > 25', FALSE),
(57, 'FIND * FROM Users WHERE Age > 25', FALSE);

-- Choices for Question 58
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(58, 'SORT BY', FALSE),
(58, 'ARRANGE BY', FALSE),
(58, 'ORDER BY', TRUE),
(58, 'GROUP BY', FALSE);

-- Choices for Question 59
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(59, 'PUT INTO tablename VALUES (...)', FALSE),
(59, 'INSERT INTO tablename VALUES (...)', TRUE),
(59, 'ADD TO tablename VALUES (...)', FALSE),
(59, 'PUSH INTO tablename VALUES (...)', FALSE);

-- Choices for Question 60
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(60, 'UNIQUE', FALSE),
(60, 'DIFFERENT', FALSE),
(60, 'DISTINCT', TRUE),
(60, 'VARIED', FALSE);


-- Create questions and answers for Git quiz

INSERT INTO questions (quiz_id, question_text) VALUES
(7, 'What command is used to download a repository from GitHub to your local machine?'),
(7, 'Which Git command shows the changes between commits, commit and working tree, etc?'),
(7, 'What is the command to create a new branch in Git?'),
(7, 'Which command is used to switch to a different branch?'),
(7, 'How do you stage files for a commit in Git?'),
(7, 'What is the command to commit changes with a message?'),
(7, 'Which command shows the commit history?'),
(7, 'What command is used to merge a branch into the current branch?'),
(7, 'How do you fetch changes from a remote repository without merging?'),
(7, 'What command is used to push your local commits to a remote repository?');

-- Choices for Question 61
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(61, 'git download', FALSE),
(61, 'git clone', TRUE),
(61, 'git pull', FALSE),
(61, 'git get', FALSE);

-- Choices for Question 62
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(62, 'git status', FALSE),
(62, 'git log', FALSE),
(62, 'git diff', TRUE),
(62, 'git show', FALSE);

-- Choices for Question 63
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(63, 'git start branch', FALSE),
(63, 'git new branch', FALSE),
(63, 'git branch', TRUE),
(63, 'git create branch', FALSE);

-- Choices for Question 64
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(64, 'git switch', TRUE),
(64, 'git change', FALSE),
(64, 'git checkout', FALSE),
(64, 'git swap', FALSE);

-- Choices for Question 65
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(65, 'git stage', FALSE),
(65, 'git add', TRUE),
(65, 'git update', FALSE),
(65, 'git ready', FALSE);

-- Choices for Question 66
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(66, 'git message "My changes"', FALSE),
(66, 'git save -m "My changes"', FALSE),
(66, 'git commit -m "My changes"', TRUE),
(66, 'git apply "My changes"', FALSE);

-- Choices for Question 67
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(67, 'git history', FALSE),
(67, 'git commits', FALSE),
(67, 'git log', TRUE),
(67, 'git list', FALSE);

-- Choices for Question 68
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(68, 'git join', FALSE),
(68, 'git merge', TRUE),
(68, 'git combine', FALSE),
(68, 'git integrate', FALSE);

-- Choices for Question 69
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(69, 'git fetch', TRUE),
(69, 'git retrieve', FALSE),
(69, 'git update', FALSE),
(69, 'git pull', FALSE);

-- Choices for Question 70
INSERT INTO choices (question_id, choice_text, is_correct) VALUES
(70, 'git push', TRUE),
(70, 'git upload', FALSE),
(70, 'git send', FALSE),
(70, 'git deploy', FALSE);


-- Alter users table so that username and email address are UNIQUE

ALTER TABLE users
ADD CONSTRAINT unique_username UNIQUE(username);

ALTER TABLE users
ADD CONSTRAINT unique_email UNIQUE(email);

-- Alter choices table so that it contains a quiz_id COLUMN

ALTER TABLE choices
ADD COLUMN quiz_id INT;

ALTER TABLE choices
DROP COLUMN quiz_id;

UPDATE choices
SET quiz_id = 7
WHERE question_id > 60 AND question_id < 71; 

TABLE choices


ALTER TABLE choices
ADD CONSTRAINT fk_quizid
FOREIGN KEY (quiz_id)
REFERENCES quizzes(quiz_id);

SELECT * FROM choices
ORDER BY choice_id ASC;

TABLE users;