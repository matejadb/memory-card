export default function End({ handleReset }) {
	return (
		<div className="game-won">
			<h1>You won the game!</h1>
			<button onClick={handleReset}>Restart</button>
		</div>
	);
}
