import { useEffect, useState } from 'react';
import Card from './Card';

export default function GameBoard({
	onSetScore,
	onSetHighScore,
	score,
	highScore,
}) {
	const [pokemons, setPokemons] = useState([]);
	const [dataIsLoaded, setDataIsLoaded] = useState(false);
	const [clickedPokemon, setClickedPokemon] = useState([]);

	function shuffleArray(arr) {
		const newArray = [...arr];
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
		}

		return newArray;
	}

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=12')
			.then((res) => res.json())
			.then(async (data) => {
				const detailedData = await Promise.all(
					data.results.map((pokemon) =>
						fetch(pokemon.url).then((res) => res.json())
					)
				);

				setPokemons(shuffleArray(detailedData));
				setDataIsLoaded(true);
			});
	}, []);

	if (!dataIsLoaded) {
		return (
			<div className="loading">
				<h1>Loading. Please wait . . .</h1>
			</div>
		);
	}

	return (
		<div className="game-board">
			{pokemons.map((pokemon) => (
				<Card
					name={pokemon.name}
					imageLink={pokemon.sprites.front_default}
					key={pokemon.name}
					score={score}
					highScore={highScore}
					onSetScore={onSetScore}
					onSetHighScore={onSetHighScore}
					shuffle={shuffleArray}
					clickedPokemon={clickedPokemon}
					setClickedPokemon={setClickedPokemon}
					pokemonsArr={pokemons}
					onSetPokemons={setPokemons}
				/>
			))}
		</div>
	);
}
