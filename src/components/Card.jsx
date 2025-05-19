export default function Card({ itemsObj }) {
	return (
		<div className="card">
			<img src={itemsObj.sprites.front_default} alt="card-image" />
			<h2>{itemsObj.name}</h2>
		</div>
	);
}
