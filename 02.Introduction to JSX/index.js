const sum = () => {
	let a = 10;
	let b = 20;
	return a + b;
};

//JSX Expression (Assigning JSX to JAVAScript variable)
const header = <h2> JSX Expression</h2>;
function App() {
	const name = 'Harish';
	const rollNo = 174;
	const demo = null;
	let undef;
	const booln = true.toString();
	return (
		<>
			<h1>Lets Get Started with JSX: {name} </h1>
			{/* Rendering JSX expression in JSX */}
			{header}
			<h1>Your rollNo : {rollNo}</h1>
			<h1>Null value:{demo}</h1>
			<h1>Undefine value: {undef}</h1>
			<h1>Boolean value : {booln}</h1>
			{/* 1.When your try to access demo(null) it shows nothing screen
				2.When your try to access hello(undefined) it shows nothing screen
				3.When your try to access hi(boolean) it shows nothing screen
				4.To display a boolean value you can use the  .toString() method on the 
				variable to convert it into a string.
			*/}
			<h1>Calling Sum function: {sum()}</h1>
		</>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
