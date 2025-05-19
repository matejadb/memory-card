export default function Card({ name, imageLink }) {
	return (
		<div className="card">
			<img src={imageLink} alt={name + '-avatar'} />
			<h2>{name}</h2>
		</div>
	);
}
