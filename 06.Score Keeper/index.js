//Creating a Score Keeper App

let score = 0;
let wicket = 0;
const ballWiseRes = [];
let hit = 0;
let inputRef = React.createRef();
function addScore(num) {
	hit = num;
	console.log(hit);
	rootElement.render(<App />);
	// if (wicket < 10) {
	// 	ballWiseRes.push(num);
	// 	score += num;
	// 	console.log(score);
	// 	rootElement.render(<App />);
	// 	console.log(ballWiseRes);
	// }
}
function addWicket() {
	hit = 'W';
	console.log(hit);
	rootElement.render(<App />);
	// if (wicket < 10) {
	// 	ballWiseRes.push('W');
	// 	wicket += 1;
	// 	rootElement.render(<App />);
	// 	console.log(ballWiseRes);
	// }
}
const Result = () => (
	<h2>
		{ballWiseRes.map((res, index) => (
			<>
				{index % 6 == 0 ? <br /> : null}
				<span key={index}>
					{res === 0 ? <strong>*</strong> : res} &nbsp;
				</span>
			</>
		))}
	</h2>
);

const ScoreButtons = () => (
	<div>
		<button className="btn" onClick={() => addScore(0)}>
			0
		</button>
		<button className="btn" onClick={() => addScore(1)}>
			1
		</button>
		<button className="btn" onClick={() => addScore(2)}>
			2
		</button>
		<button className="btn" onClick={() => addScore(3)}>
			3
		</button>
		<button className="btn" onClick={() => addScore(4)}>
			4
		</button>
		<button className="btn" onClick={() => addScore(5)}>
			5
		</button>
		<button className="btn" onClick={() => addScore(6)}>
			6
		</button>
		<button className="btn" onClick={() => addWicket()}>
			wicket
		</button>
	</div>
);
//To prevent Synthetic events of form
function handleSubmit(event) {
	event.preventDefault();

	if (hit == 'W') {
		wicket += 1;
	} else {
		score += hit;
	}
	ballWiseRes.unshift(
		//Method 1 to display the commentary on the UI
		// <span>
		// 	{hit}
		// 	{','}
		// 	{inputRef.current.value}
		// </span>

		//Method 2 to display the commentary on the UI
		<span>{`${hit}, ${inputRef.current.value}`}</span>
	);
	hit = 0;
	inputRef.current.value = '';
	console.log(inputRef.current.value);
	rootElement.render(<App />);
}
//Creating a component for Form
const Form = () => (
	<>
		<form onSubmit={handleSubmit}>
			<input className="btn" value={hit} placeholder="Enter Runs"></input>
			<input
				className="btn"
				ref={inputRef}
				placeholder="ADD COMMENTRY"
			></input>
			<button className="btn">Sumbit</button>
		</form>
	</>
);

const App = () => (
	<>
		<h1>Score Keeper</h1>
		<h2>
			Score : {score}/{wicket}
		</h2>
		<ScoreButtons />
		{/* <Result /> */}
		<Form />

		{ballWiseRes.map((res, index) => (
			<h2 key={index}>{res}</h2>
		))}
	</>
);

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);
