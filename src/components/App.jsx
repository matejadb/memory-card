import Header from './Header';
import Description from './Description';
import GameBoard from './GameBoard';
import End from './End';
import { useState } from 'react';

export default function App() {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [clickedPokemon, setClickedPokemon] = useState([]);

	return (
		<div className="container">
			<Header score={score} highScore={highScore} />
			<Description />
			{score === 12 ? (
				<End
					onSetClickedPokemon={setClickedPokemon}
					onSetHighScore={setHighScore}
					onSetScore={setScore}
				/>
			) : (
				<GameBoard
					onSetScore={setScore}
					onSetHighScore={setHighScore}
					score={score}
					highScore={highScore}
					onSetClickedPokemon={setClickedPokemon}
					clickedPokemon={clickedPokemon}
				/>
			)}
		</div>
	);
}
