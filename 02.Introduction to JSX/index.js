function App() {
	const name = 'Harish';
	const rollNo = 174;
	const demo = null;
	let hello;
	const hi = true;
	return (
		<>
			<h1>Lets Get Started with JSX {name} </h1>
			<h1>Your rollNo is {rollNo}</h1>
			<h1>Your demo is {demo}</h1>
			<h1>Your hello is {hello}</h1>
			<h1>Your hi is {hi}</h1>
			{/* 1.When your try to access demo(null) it shows nothing screen
				2.When your try to access hello(undefined) it shows nothing screen
				3.When your try to access hi(boolean) it shows nothing screen
			*/}
		</>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
