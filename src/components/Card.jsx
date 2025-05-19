export default function Card({
	name,
	imageLink,
	onSetScore,
	score,
	highScore,
	onSetHighScore,
	shuffle,
	clickedPokemon,
	setClickedPokemon,
	pokemonsArr,
	onSetPokemons,
}) {
	name = name.split('');
	name = name[0].toUpperCase() + name.slice(1).join('');
	const formatName = name;

	const handleCardClick = () => {
		if (!clickedPokemon.includes(name)) {
			onSetScore((s) => s + 1);
			setClickedPokemon([...clickedPokemon, name]);
			onSetPokemons(shuffle(pokemonsArr));
		} else {
			if (score > highScore) {
				onSetHighScore(score);
			}
			onSetScore(0);
			setClickedPokemon([]);
		}
	};

	return (
		<div className="card" onClick={handleCardClick}>
			<img src={imageLink} alt={name + '-avatar'} />
			<h2>{formatName}</h2>
		</div>
	);
}
