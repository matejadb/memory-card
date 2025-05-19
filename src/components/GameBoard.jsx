import { useEffect, useState } from 'react';
import Card from './Card';

export default function GameBoard() {
	const [items, setItems] = useState([]);
	const [dataIsLoaded, setDataIsLoaded] = useState(false);

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon/ditto')
			.then((res) => res.json())
			.then((json) => {
				setItems(json);
				setDataIsLoaded(true);
			});
	}, []);
	if (!dataIsLoaded) {
		return (
			<div>
				<h1>Loading. Please wait . . .</h1>
			</div>
		);
	}

	return (
		<div className="game-board">
			<Card itemsObj={items} />
			<Card itemsObj={items} />
			<Card itemsObj={items} />
			<Card itemsObj={items} />
			<Card itemsObj={items} />
			<Card itemsObj={items} />
			<Card itemsObj={items} />
			<Card itemsObj={items} />
			<Card itemsObj={items} />
			<Card itemsObj={items} />
			<Card itemsObj={items} />
			<Card itemsObj={items} />
		</div>
	);
}
