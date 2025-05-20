export default function End({
	onSetClickedPokemon,
	onSetScore,
	onSetHighScore,
}) {
	const handleReset = () => {
		onSetClickedPokemon([]);
		onSetScore(0);
		onSetHighScore(0);
	};

	return (
		<div className="game-won">
			<h1>You won the game!</h1>
			<button onClick={handleReset}>Restart</button>
		</div>
	);
}
