//Creating a Score Keeper App

let score = 0;
let wicket = 0;
function addScore(num) {
	score += num;
	console.log(score);
	rootElement.render(<App />);
}
const App = () => (
	<>
		<h1>Score Keeper</h1>
		<h2>
			Score : {score}/{wicket}
		</h2>
		<div>
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
			<button className="btn" onClick={() => addScore()}>
				wicket
			</button>
		</div>
	</>
);

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);
