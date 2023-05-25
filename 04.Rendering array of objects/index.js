//Rendering array of objects in JSX

const grad = [
	{ id: 1, name: 'John', age: 25, occupation: 'Developer' },
	{ id: 2, name: 'Sarah', age: 30, occupation: 'Designer' },
	{ id: 3, name: 'Mike', age: 28, occupation: 'Engineer' },
];

function App() {
	return (
		<>
			<h1>Graduates proffesions</h1>
			<h1>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Age</th>
							<th>Occupation</th>
						</tr>
					</thead>
					<tbody>
						{grad.map((user) => (
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.name}</td>
								<td>{user.age}</td>
								<td>{user.occupation}</td>
							</tr>
						))}
					</tbody>
				</table>
			</h1>
		</>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
