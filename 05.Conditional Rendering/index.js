//Condtitional Rendering Using Ternary Operator
function App() {
	let loggedIn = true;
	return (
		<>
			{/* If you want change some part of the component 
			We can achieve this based on some conditions
			1.if condition used but (In jsx we can't use if condition coz it doesn't return implicitly )
			2. ternary operator 
			syntax {condition? truthly: false}
		*/}
			<h1>Hello {loggedIn ? 'Alexa' : 'User'}!!</h1>
		</>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
