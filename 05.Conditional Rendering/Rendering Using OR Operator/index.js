/* Rendering Conditions using OR(||) Operator 
 => AND operator awlays return first truthy value and last falsly value
	Eg: "hello" && false (it returns hello)
	Eg: true && "hello" (it returns true)
	*=> By this we can conclude that OR operator returns first truthly value

	Eg: 0 && "" && null && undefined && false (it returns last falsly value)
	ANS: undefined
*/
function App() {
	let loggedIn = true;
	const name = 'Harish';
	const lastName = 'Kanuka';
	return (
		<>
			{/* If We have Last Name then we need to display the last name else we need to 
				display the first name
		*/}
			<h1>Hello {loggedIn ? lastName || name : 'User'}!!</h1>
			{loggedIn && <h1>'Welcome to the Portal'</h1>}
		</>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
