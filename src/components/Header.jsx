export default function Header({ score, highScore }) {
	return (
		<div className="header">
			<div className="title">
				<h1>Pokemon Memory Game</h1>
			</div>
			<div className="score-board">
				<p>Score: {score}</p>
				<p>High Score: {highScore}</p>
			</div>
		</div>
	);
}
