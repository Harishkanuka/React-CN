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
	<div>
		<h1>Hello World JSX</h1>
		<p>this is from jsx Para</p>
	</div>
);

ReactDOM.createRoot(document.getElementById('root')).render(jsxHeading);
