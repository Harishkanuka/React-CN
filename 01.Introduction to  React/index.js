/*
 Create a element using js and append it to the HTML

 const heading = document.createElement('h2');
 heading.textContent = 'Hello World from js';
 heading.className = 'header';
 document.getElementById('root').append(heading);
 console.log('JavaScript element', heading);
 */

/* React With Java Script */

/* Here it will take 3 arguments 1.Type(h1, p, ...) 
2.object{}(here we need to mention class name) 
3.textContent (which we want to append or show)  
const reactHeading = React.createElement(
	'h1',
	{ className: 'head' },
	'Hello World from React'
);
// console.log('React element', reactHeading)
ReactDOM.createRoot(document.getElementById('root')).render(reactHeading);
*/
/* React Using JSX */

const jsxHeading = (
	<React.Fragment>
		<h1>About React</h1>
		<ul>
			<li>React is javaScript library</li>
			<li>React is composable, reusable</li>
			<li>React Dom is most efficient than Dom</li>
		</ul>
	</React.Fragment> //We can use empty without using React.Fragment
);
// ReactDOM.createRoot(document.getElementById('root')).render(jsxHeading);

// Creating a React Component
function App() {
	return (
		<>
			<h1>About React</h1>
			<ul>
				<li>React is javaScript library</li>
				<li>React is composable, reusable</li>
				<li>React Dom is most efficient than Dom</li>
			</ul>
		</>
	);
}

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

//Creating a React Component using arrow functions
// Arrow functions are implicitly returns which we don't need to pass return keyword
const ArrowApp = () => (
	<>
		<h1>About React</h1>
		<ul>
			<li>React is javaScript library</li>
			<li>React is composable, reusable</li>
			<li>React Dom is most efficient than Dom</li>
		</ul>
	</>
);
// Creating one more function component wrapping them
function Name() {
	return (
		<>
			<h1>Hello From Name Component</h1>
		</>
	);
}
ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<ArrowApp /> <Name />
	</>
);
