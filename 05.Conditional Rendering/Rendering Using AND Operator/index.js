/* 
 In JavaScript everything considered as true except
	1.null
	2.0
	3.undefined
	4.""(emptyString)
	5.flase
*/

/* Rendering Conditions using AND(&&) Operator 
 => AND operator awlays return last truthly value and first falsly value
	Eg: "hello" && true (it returns true)
	Eg: true && "hello" (it returns 'hello')
	*=> By this we can conclude that AND operator returns last truth value

	Eg: true && 1 && 0 && "hello" && false (it returns first false value)
	ANS: 0
*/

function App() {
	let loggedIn = true;
	return (
		<>
			<h1>Hello{loggedIn ? 'Alexa' : 'User'}!!</h1>
			{loggedIn && <h1>'Welcome to the Portal'</h1>}
		</>
	);
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
