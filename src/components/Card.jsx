export default function Card({
	name,
	imageLink,
	onSetScore,
	score,
	highScore,
	onSetHighScore,
	shuffle,
	clickedPokemon,
	onSetClickedPokemon,
	pokemonsArr,
	onSetPokemons,
}) {
	name = name.split('');
	name = name[0].toUpperCase() + name.slice(1).join('');
	const formatName = name;

	const handleCardClick = () => {
		if (!clickedPokemon.includes(name)) {
			onSetScore((s) => s + 1);
			onSetClickedPokemon([...clickedPokemon, name]);
			onSetPokemons(shuffle(pokemonsArr));
		} else {
			if (score > highScore) {
				onSetHighScore(score);
			}
			onSetScore(0);
			onSetClickedPokemon([]);
		}
	};

	return (
		<div className="card" onClick={handleCardClick}>
			<img src={imageLink} alt={name + '-avatar'} />
			<h2>{formatName}</h2>
		</div>
	);
}
