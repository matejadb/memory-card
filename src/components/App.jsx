import Header from './Header';
import Description from './Description';
import GameBoard from './GameBoard';
import { useState } from 'react';

export default function App() {
	const [score, setScore] = useState(0);

	return (
		<div className="container">
			<Header score={score} />
			<Description />
			<GameBoard onSetScore={setScore} />
		</div>
	);
}
