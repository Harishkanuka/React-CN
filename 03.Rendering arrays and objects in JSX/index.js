function App() {
	let car = ['BMW', 'CRETA', 'TATA PUNCH', 'VITARA'];
	let object = {
		name: 'Harish',
		age: '23',
	};
	return (
		<>
			<h1>Arrays and Objects in JavaScript</h1>
			{/* Arrays can be render using JSX  */}
			{/* Rendering the array elements in JSX using map() method */}
			<ul>
				{car.map((ele, index) => (
					<li key={index}>
						<h2>{ele}</h2>
					</li>
				))}
			</ul>

			{/* Objects as Whole can't be render because objects are not defined as child of react
				=> But we can render object properties using .operator
			*/}
			<h2>{object.name}</h2>
		</>
	);
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
