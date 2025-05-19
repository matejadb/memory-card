import { useEffect, useState } from 'react';
import Card from './Card';

export default function GameBoard() {
	const [items, setItems] = useState([]);
	const [dataIsLoaded, setDataIsLoaded] = useState(false);

	//pokeapi.co/api/v2/pokemon?offset=20&limit=12

	//const data = {};

	/* async function handleCardLoad() {
		try {
			const response = await fetch();
		} catch (error) {
			console.error(error);
		}
	} */

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=12')
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
			{/* <Card itemsObj={items} />
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
			<Card itemsObj={items} /> */}
		</div>
	);
}
